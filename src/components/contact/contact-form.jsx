import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  return (
    <div>
      <form className="flex h-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-11/12 border-b-2 bg-transparent p-4 text-white outline-none placeholder:text-white focus:border-b-rapture-blue focus:placeholder:text-rapture-blue ${formData.name ? "" : "border-b-light-coral placeholder:text-light-coral"}`}
            />
            {!formData.name && (
              <i className="absolute -bottom-4 left-0 w-full text-[10px] font-bold text-light-coral">
                This field is required
              </i>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-11/12 border-b-2 bg-transparent p-4 text-white outline-none placeholder:text-white focus:border-b-rapture-blue focus:placeholder:text-rapture-blue ${formData.email ? "" : "border-b-light-coral placeholder:text-light-coral"}`}
            />
            {!formData.email && (
              <i className="absolute -bottom-4 left-0 w-full text-[10px] font-bold text-light-coral">
                This field is required
              </i>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className={`w-11/12 border-b-2 bg-transparent p-4 text-white outline-none placeholder:text-white focus:border-b-rapture-blue focus:placeholder:text-rapture-blue ${formData.company ? "" : "border-b-light-coral placeholder:text-light-coral"}`}
            />
            {!formData.company && (
              <i className="absolute -bottom-4 left-0 w-full text-[10px] font-bold text-light-coral">
                This field is required
              </i>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className={`w-11/12 border-b-2 bg-transparent p-4 text-white outline-none placeholder:text-white focus:border-b-rapture-blue focus:placeholder:text-rapture-blue ${formData.title ? "" : "border-b-light-coral placeholder:text-light-coral"}`}
            />
            {!formData.title && (
              <i className="absolute -bottom-4 left-0 w-full text-[10px] font-bold text-light-coral">
                This field is required
              </i>
            )}
          </div>

          <div className="relative">
            <textarea
              placeholder="Message"
              type="text"
              id="title"
              name="title"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-11/12 border-b-2 bg-transparent p-4 text-white outline-none placeholder:text-white focus:border-b-rapture-blue focus:placeholder:text-rapture-blue ${formData.message ? "" : "border-b-light-coral placeholder:text-light-coral"} resize-none`}
            />
            {!formData.message && (
              <i className="absolute -bottom-4 left-0 w-full text-[10px] font-bold text-light-coral">
                This field is required
              </i>
            )}
          </div>
        </div>

        <button
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.company ||
            !formData.title ||
            !formData.message
          }
          className="hover:text-jungle-green-100 mt-4 cursor-pointer self-start rounded-3xl bg-white px-9 py-3 text-semi-bold-sm font-bold text-jungle-green transition-colors duration-200 hover:bg-rapture-blue disabled:cursor-not-allowed disabled:bg-opacity-25"
        >
          submit
        </button>
      </form>
    </div>
  );
}
