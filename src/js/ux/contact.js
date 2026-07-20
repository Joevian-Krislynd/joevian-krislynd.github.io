export default class Contact {
  constructor() {
    this.form = document.querySelector(".contact-form");
    if (!this.form) return;
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    const subject = encodeURIComponent("Contact from portfolio website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    const mailto = `mailto:joevian.k@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }
}
