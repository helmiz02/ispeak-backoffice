import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0"> Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have Some <b>Question?</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contact.png" alt="Contact" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Abir Lakhal" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send Message <div className="fa fa-paper-plane ms-2"></div></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
