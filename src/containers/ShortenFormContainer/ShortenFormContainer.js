import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortenForm from "../../components/ShortenForm/ShortenForm";
export default function ShortenFormContainer() {
  const [link, setLink] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);
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
      .catch(() => {
        setErrors([{ message: "Invalid link" }]);
        setIsLoading(false);
      });
  };

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

  useEffect(() => {
    if (shortenLinks.length > 6) setShortenLinks(shortenLinks.slice(0, 6));
  }, [shortenLinks]);

  return (
    <ShortenForm
      link={link}
      setLink={setLink}
      handleCopy={handleCopy}
      handleSubmit={handleSubmit}
      shortenLinks={shortenLinks}
      errors={errors}
      isLoading={isLoading}
    />
  );
}
