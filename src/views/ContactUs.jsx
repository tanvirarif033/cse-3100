export default function ContactUs() {
    return (
      <section className="text-center mt-4">
        <h2>Contact Us</h2>
        <form className="w-50 mx-auto mt-3">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="phone" className="form-control" placeholder="Phone" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <div className="button-container">
         <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

        </form>
      </section>
    );
  }
  