"use client";

export default function CommentForm() {
  return (
    <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form-clt">
            <input type="text" name="name" id="name" placeholder="Votre nom" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-clt">
            <input
              type="text"
              name="email"
              id="email2"
              placeholder="Votre email"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-clt">
            <textarea
              name="message"
              id="message"
              placeholder="Votre message"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="gt-btn">
            Poster le commentaire
            <i className="fa-sharp fa-light fa-arrow-right-long ms-1" />
          </button>
        </div>
      </div>
    </form>
  );
}
