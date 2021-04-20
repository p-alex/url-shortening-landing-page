import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortenForm from "../../components/ShortenForm/ShortenForm";
export default function ShortenFormContainer() {
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let storageArray = JSON.parse(localStorage.getItem("shortenLinks"));
    storageArray.map((item) => {
      item.isCopied = false;
    });
    localStorage.setItem("shortenLinks", JSON.stringify(storageArray));
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) return setErrors([{ message: "Please add a link" }]);
    setErrors([]);
    setIsLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        const { short_link3 } = response.data.result;
        let storageArray = JSON.parse(localStorage.getItem("shortenLinks"));
        storageArray.push({
          longLink: link,
          shortLink: short_link3,
          isCopied: false,
        });
        localStorage.setItem("shortenLinks", JSON.stringify(storageArray));
        setLink("");
        setIsLoading(false);
      })
      .catch(() => {
        setErrors([{ message: "Invalid link" }]);
        setIsLoading(false);
      });
  };

  const handleCopy = (id) => {
    console.log(id);
    const el = document.createElement("textarea");
    el.value = JSON.parse(localStorage.getItem("shortenLinks"))[id]?.shortLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    let storageArray = JSON.parse(localStorage.getItem("shortenLinks"));
    storageArray.map((item) => {
      item.isCopied = false;
    });
    storageArray.map((item, index) => {
      if (index === id) {
        item.isCopied = true;
      }
    });
    localStorage.setItem("shortenLinks", JSON.stringify(storageArray));
    setCopied(!copied);
  };
  // useEffect(() => {
  //   if (shortenLinks.length > 6) setShortenLinks(shortenLinks.slice(0, 6));
  // }, [shortenLinks]);
  return (
    <ShortenForm
      link={link}
      setLink={setLink}
      handleCopy={handleCopy}
      handleSubmit={handleSubmit}
      errors={errors}
      isLoading={isLoading}
      copied={copied}
    />
  );
}
