import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="bg-[#020043] mt-40 py-20 ">
            <footer className="footer container mx-auto text-[#FFFFF5]">
                <aside className="">
                    <img src="/public/logo light.png" alt="" />
                    <p>
                        123 Main Street Anytown, USA <br />
                        Postal Code: 12345
                    </p>
                    <p className="pt-4 ">
                        Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)
                    </p>
                </aside>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms And Condition</a>

                </nav>
                <nav>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
                <nav>
                    <h4>Follow Us </h4>
                    <div className="flex hover:text-white gap-4">
                        <FaFacebook className="text-xl"/>
                        <FaInstagramSquare className="text-xl"/>
                        <LiaLinkedin className="text-2xl"/>
                        <BsYoutube className="text-2xl"/>
                    </div>
                    <p className="text-sm text-[#fffff5bd] mt-5">@docplus 2024</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;