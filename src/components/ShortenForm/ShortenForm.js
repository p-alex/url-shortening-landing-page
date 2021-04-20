import React from "react";
import Loader from "../../ui/Loader/Loader";
import "./ShortenForm.scss";

export default function ShortenForm({
  link,
  handleCopy,
  handleSubmit,
  shortenLinks,
  errors,
  isLoading,
  setLink,
}) {
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
        <p className="errorText">{errors[0]?.message}</p>
      </form>
      {JSON.parse(localStorage.getItem("shortenLinks")).map((item, id) => (
        <div className="shortenLink_result" key={id}>
          <span>
            {item.longLink?.length > 70
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
