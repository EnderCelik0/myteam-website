export default function ContactForm() {
  return (
    <div>
      <form>
        <div>
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Address"
          />
        </div>

        <div>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
          />
        </div>

        <div>
          <input type="text" id="title" name="title" placeholder="Title" />
        </div>

        <div>
          <textarea type="text" id="title" name="title" placeholder="Message" />
        </div>
      </form>
    </div>
  );
}
