import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../../ui/Loader/Loader";
import "./ShortenForm.scss";
export default function ShortenForm() {
  const [link, setLink] = useState("");
  const [shortenLinks, setShortenLinks] = useState([
    { longLink: "asdasdas", shortLink: "asdsad", isCopid: false },
  ]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) return setErrors([{ message: "Please add a link" }]);
    setErrors([]);
    setIsLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        const { short_link3 } = response.data.result;
        console.log(response.data);
        setShortenLinks([
          { longLink: link, shortLink: short_link3, isCopied: false },
          ...shortenLinks,
        ]);
        setLink("");
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors([{ message: "Invalid link" }]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (shortenLinks.length > 3) setShortenLinks(shortenLinks.slice(0, 3));
  }, [shortenLinks]);

  const handleCopy = (id) => {
    const el = document.createElement("textarea");
    el.value = shortenLinks[id].shortLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setShortenLinks(
      shortenLinks.map((link, index) => {
        if (id === index) return { ...link, isCopied: true };
        return { ...link };
      })
    );
  };
  return (
    <section className="shorten">
      <form
        className="shorten_form"
        onSubmit={!isLoading ? handleSubmit : (e) => e.preventDefault()}
        style={{ backgroundImage: "url(/images/bg-shorten-desktop.svg)" }}
      >
        <div className="shorten_formContainer">
          <input
            type="text"
            placeholder="Shorten a link here..."
            name="shorten"
            id="shorten"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={errors.length > 0 ? "inputError" : ""}
          />
          <button type="submit">
            {isLoading ? <Loader /> : "Shorten It!"}
          </button>
        </div>
        <p className="error">{errors[0]?.message}</p>
      </form>
      {shortenLinks.map((item, id) => (
        <div className="shortenLink_result" key={id}>
          <span>
            {item.longLink.length > 70
              ? item.longLink.slice(0, 71) + `...`
              : item.longLink}
          </span>
          <p>{item.shortLink}</p>
          <button
            type="button"
            className={item.isCopied ? "copied" : ""}
            onClick={() => handleCopy(id)}
          >
            {item.isCopied ? "Copied!" : "Copy!"}
          </button>
        </div>
      ))}
    </section>
  );
}
