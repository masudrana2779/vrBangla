import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-sec">
                <div className="oppi_banner oppi_inner_banner oppi_contact_banner">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="oppi_banner_content">
                                    <h1 className="banner_title text-center wow fadeInUp" data-wow-delay="0.2s">Let’s
                                        get in touch</h1>
                                    <ul className="oppi_breadcrumb_link text-center wow fadeInUp">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="oppi_contactUs_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="oppi_contact_item">
                                    <div className="icon wow fadeInUp" data-wow-delay="0.2s">
                                        <i className="icon_chat_alt"></i>
                                    </div>
                                    <h4 className="contact_item_title wow fadeInUp" data-wow-delay="0.3s">Just ask. Get
                                        answers.</h4>
                                    <p className="contact_para wow fadeInUp" data-wow-delay="0.4s">Super Jeffrey
                                        bog-standard on your bike mate crikey car boot.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="oppi_contact_item">
                                    <div className="icon wow fadeInUp" data-wow-delay="0.3s">
                                        <i className="icon_phone"></i>
                                    </div>
                                    <h4 className="contact_item_title wow fadeInUp" data-wow-delay="0.4s">Reach us by
                                        phone.</h4>
                                    <p className="contact_para wow fadeInUp" data-wow-delay="0.5s">Phone: + (640) 264
                                        674 548 <br/> Email: contact@oppi.com</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="oppi_contact_item">
                                    <div className="icon wow fadeInUp" data-wow-delay="0.4s">
                                        <i className="icon_pin_alt"></i>
                                    </div>
                                    <h4 className="contact_item_title wow fadeInUp" data-wow-delay="0.5s">Just ask. Get
                                        answers.</h4>
                                    <p className="contact_para wow fadeInUp" data-wow-delay="0.6s">Monday – Friday: 10am
                                        – 07pm EDT It is currently 06:26 AM on Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="oppi_contact_form_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="oppi_contact_form_content">
                                    <h1 className="title wow fadeInUp" data-wow-delay="0.2s">Don’t Hesitate to Contact
                                        us for any <span>Information.</span></h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.3s">Call us for immidiate support to
                                        this number</p>
                                    <p className="wow fadeInUp number" data-wow-delay="0.4s">
                                        <span>+609 547 850 689</span></p>
                                    <p className="wow fadeInUp email" data-wow-delay="0.4s"><i
                                        className="icon_mail_alt"></i> <span>Email: support@oppi.com</span></p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="oppi_contact_form_group wow fadeInUp" data-wow-delay="0.6s">
                                    <form action="#" method="POST" className="oppi_contact_form">
                                        <div className="row">
                                            <div className="col-sm-12 col-12 form-group">
                                                <input type="text" className="form-control" placeholder="Your Name"
                                                       onFocus="this.placeholder=''"
                                                       onBlur="this.placeholder='Your Name'"/>
                                            </div>
                                            <div className="col-sm-12 col-12 form-group">
                                                <input type="email" className="form-control" placeholder="Your Email"
                                                       onFocus="this.placeholder=''"
                                                       onBlur="this.placeholder='Your Email'"/>
                                            </div>
                                            <div className="col-sm-12 col-12 form-group">
                                                <input type="text" className="form-control" placeholder="Subject"
                                                       onFocus="this.placeholder=''"
                                                       onBlur="this.placeholder='Subject'"/>
                                            </div>
                                            <div className="col-sm-12 col-12 form-group">
                                                <textarea className="form-control" placeholder="Message"
                                                          onFocus="this.placeholder=''"
                                                          onBlur="this.placeholder='Message'"></textarea>
                                            </div>
                                            <div className="col-sm-12 col-12 form-group send_message">
                                                <a className="oppi_dbtn btn_border" href="#">Send Message</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_map_wrap wow fadeInUp">
                    <div className="contact_map" id="contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4219.22026148985!2d90.38066884852154!3d23.751318796841357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28217340a90afceb!2sLive%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1581958564535!5m2!1sen!2sbd"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;