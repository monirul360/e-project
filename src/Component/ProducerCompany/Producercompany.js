import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Nidhicompany/nidhi.png';
const Producercompany = () => {
    return (
        <div>
            {/* Producer-company */}
            <PageTitle title='Producer-company'></PageTitle>
            <section class="page-section py-5 bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Producer-company</h2>

                            <p>
                                Are you Producing, Harvesting, Procuring, Marketing or Selling the Primary Products? Producer company works on dealing with
                                the production with its primary members.
                            </p>

                            <p>
                                Producer company focuses on the processing, drying, brewing, canning of its produce. Selling of the Machinery to its Members.
                                Technical Consultancy Services Training Services to its members. Welfare and benefits for the Members Etc.
                            </p>

                            <p>
                                Primary produce is comparable to the production, transmission, and distribution of energy as well as the revitalization of water
                                and land resources through communication and conservation.Producers' or their primary produce's insurance. promoting
                                mutuality and cooperation strategies
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Site Promotion  */}
            <section class="promotion-section bg-light pb-5">
                <div class="container">
                    <div class="promotion-content">
                        <p>
                            Connect with ACOUNTIER to Register your Company as a Limited Liability Company.
                        </p>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default Producercompany;