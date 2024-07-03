import SectionTitle from "../Shared/SectionTitle";

const FAQ = () => {
    return (
        <div className="mt-20 lg:mt-32">
            <div className="mb-8">
                <SectionTitle subtitle="FAQ" title="Frequently Asked Question" />
            </div>
            <div className="space-y-3">
                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
                    <div className="collapse-content bg-white pt-2">
                        <p className="text-[#34326875]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
                    <div className="collapse-content bg-white pt-2">
                        <p className="text-[#34326875]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                    <div className="collapse-content bg-white pt-2">
                        <p className="text-[#34326875]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
                    <div className="collapse-content bg-white pt-2">
                        <p className="text-[#34326875]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content bg-white pt-2">
                        <p className="text-[#34326875]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;