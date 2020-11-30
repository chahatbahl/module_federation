import React, { Fragment } from 'react';
import './../css/bootstrap.min.css';
import './../css/bootstrap-theme.min.css';
import './../css/fontAwesome.css';
import './../css/hero-slider.css';
import './../css/owl-carousel.css';
import './../css/datepicker.css';
import './../css/tooplate-style.css';
import Logo from './../img/logo.png';

const FlightPage = () => (
    <Fragment>
        <section class='banner' id='top'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-5'>
                        <div class='left-side'>
                            <div class='logo'>
                                <img src={Logo} alt='Flight Template' />
                            </div>
                            <div class='tabs-content'>
                                <h4>Choose Your Direction:</h4>
                                <ul class='social-links'>
                                    <li><a href='http://facebook.com'>Find us on <em>Facebook</em><i class='fa fa-facebook'></i></a></li>
                                    <li><a href='http://youtube.com'>Our <em>YouTube</em> Channel<i class='fa fa-youtube'></i></a></li>
                                    <li><a href='http://instagram.com'>Follow our <em>instagram</em><i class='fa fa-instagram'></i></a></li>
                                </ul>
                            </div>
                            <div class='page-direction-button'>
                                <a href='contact.html'><i class='fa fa-phone'></i>Contact Us Now</a>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-5 col-md-offset-1'>
                        <section id='first-tab-group' class='tabgroup'>
                            <div id='tab1'>
                                <div class='submit-form'>
                                    <h4>Check availability for <em>direction</em>:</h4>
                                    <form id='form-submit' action='' method='get'>
                                        <div class='row'>
                                            <div class='col-md-6'>
                                                <fieldset>
                                                    <label for='from'>From:</label>
                                                    <select required name='from' onchange='this.form.()'>
                                                        <option value=''>Select a location...</option>
                                                        <option value='Cambodia'>Cambodia</option>
                                                        <option value='Hong Kong'>Hong Kong</option>
                                                        <option value='India'>India</option>
                                                        <option value='Japan'>Japan</option>
                                                        <option value='Korea'>Korea</option>
                                                        <option value='Laos'>Laos</option>
                                                        <option value='Myanmar'>Myanmar</option>
                                                        <option value='Singapore'>Singapore</option>
                                                        <option value='Thailand'>Thailand</option>
                                                        <option value='Vietnam'>Vietnam</option>
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <div class='col-md-6'>
                                                <fieldset>
                                                    <label for='to'>To:</label>
                                                    <select required name='to' onchange='this.form.()'>
                                                        <option value=''>Select a location...</option>
                                                        <option value='Cambodia'>Cambodia</option>
                                                        <option value='Hong Kong'>Hong Kong</option>
                                                        <option value='India'>India</option>
                                                        <option value='Japan'>Japan</option>
                                                        <option value='Korea'>Korea</option>
                                                        <option value='Laos'>Laos</option>
                                                        <option value='Myanmar'>Myanmar</option>
                                                        <option value='Singapore'>Singapore</option>
                                                        <option value='Thailand'>Thailand</option>
                                                        <option value='Vietnam'>Vietnam</option>
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <div class='col-md-6'>
                                                <fieldset>
                                                    <label for='departure'>Departure date:</label>
                                                    <input name='deparure' type='text' class='form-control date' id='deparure' placeholder='Select date...' required='' onchange='this.form.()' />
                                                </fieldset>
                                            </div>
                                            <div class='col-md-6'>
                                                <fieldset>
                                                    <label for='return'>Return date:</label>
                                                    <input name='return' type='text' class='form-control date' id='return' placeholder='Select date...' required='' onchange='this.form.()' />
                                                </fieldset>
                                            </div>
                                            <div class='col-md-6'>
                                                <div class='radio-select'>
                                                    <div class='row'>
                                                        <div class='col-md-6 col-sm-6 col-xs-6'>
                                                            <label for='round'>Round</label>
                                                            <input type='radio' name='trip' id='round' value='round' required='required' onchange='this.form.()' />
                                                        </div>
                                                        <div class='col-md-6 col-sm-6 col-xs-6'>
                                                            <label for='oneway'>Oneway</label>
                                                            <input type='radio' name='trip' id='oneway' value='one-way' required='required' onchange='this.form.()' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='col-md-6'>
                                                <fieldset>
                                                    <button type='submit' id='form-submit' class='btn'>Order Ticket Now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>

        <section class='services'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-4'>
                        <div class='service-item first-service'>
                            <div class='service-icon'></div>
                            <h4>Easy Tooplate</h4>
                            <p>Donec varius porttitor iaculis. Integer sollicitudin erat et ligula viverra vulputate. In in quam efficitur, pulvinar justo ut, tempor nunc. Phasellus pharetra quis odio.</p>
                        </div>
                    </div>
                    <div class='col-md-4'>
                        <div class='service-item second-service'>
                            <div class='service-icon'></div>
                            <h4>Unique Ideas</h4>
                            <p>Cras ligula diam, tristique at aliquam at, fermentum auctor turpis. Proin leo massa, iaculis elementum massa et, consectetur varius dolor. Fusce sed ipsum sit.</p>
                        </div>
                    </div>
                    <div class='col-md-4'>
                        <div class='service-item third-service'>
                            <div class='service-icon'></div>
                            <h4>Best Support</h4>
                            <p>Fusce leo dui. Mauris et justo eget arcu ultricies porta. Nulla facilisi. Nulla nec risus sit amet magna hendrerit venenatis. Sed porta tincidunt lectus eget ultrices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-12'>
                        <div class='primary-button'>
                            <a href='#' class='scroll-top'>Back To Top</a>
                        </div>
                    </div>
                    <div class='col-md-12'>
                        <ul class='social-icons'>
                            <li><a href='https://www.facebook.com/tooplate'><i class='fa fa-facebook'></i></a></li>
                            <li><a href='#'><i class='fa fa-twitter'></i></a></li>
                            <li><a href='#'><i class='fa fa-linkedin'></i></a></li>
                            <li><a href='#'><i class='fa fa-rss'></i></a></li>
                            <li><a href='#'><i class='fa fa-behance'></i></a></li>
                        </ul>
                    </div>
                    <div class='col-md-12'>
                        <p>Copyright &copy; 2020 Chahat Flight
            </p>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
);

export default FlightPage;
