function Contact() {
  return (
    <form className="flex flex-col pt-40 mb-24 px-20 primary-font-color mx-auto max-w-2xl space-y-4">
      <h3 className="text-3xl font-bold">Let's work together</h3>
      <p>
        We'd love to hear from you! Send us a message using the form, or email
        us.
      </p>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="text-sm font-bold">First Name</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Last Name</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="text-sm font-bold">Email</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Buisness Name</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
      </div>

      <div>
        <label className="text-sm font-bold">Address</label>
        <input className="border py-1 px-2 rounded-md w-full" />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="text-sm font-bold">City</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">State</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold">Zip Code</label>
        <input className="border py-1 px-2 rounded-md w-55" />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold">How can we help you?</label>
        <textarea className="border py-1 px-2 rounded-md" />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="text-sm font-bold">Type of Roof</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Begin Project</label>
          <input className="border py-1 px-2 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm font-bold">Proyect type</label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" />
          <label className="text-sm">Roof Replacement</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" />
          <label className="text-sm">Roof Repair</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" />
          <label className="text-sm">Other</label>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold">How did you hear about us?</label>
        <input className="border py-1 px-2 rounded-md w-full" />
      </div>

      <button className="secondary-bg-color text-white p-2 rounded-md shadow-md">
        Submit
      </button>
    </form>
  );
}

export default Contact;
