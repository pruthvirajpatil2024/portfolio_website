import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const renderCard = (testimonial, index) => (
  <GlowCard card={testimonial} key={index} index={index}>
    <div className="flex items-center gap-3">
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-white-50">{testimonial.mentions}</p>
      </div>
    </div>
  </GlowCard>
);

const Testimonials = () => {
  // Below lg there isn't room for 3 columns without cramming or clipping
  // cards, so split into two horizontally-scrollable rows of 3 instead.
  const rows = [testimonials.slice(0, 3), testimonials.slice(3, 6)];

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What People Say About Me?" />

        <div className="flex flex-col gap-5 mt-16 lg:hidden">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="testimonial-scroll-row">
              {row.map((testimonial, index) => (
                <div key={index} className="testimonial-scroll-item">
                  {renderCard(testimonial, index)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:columns-3 mt-16">
          {testimonials.map((testimonial, index) => renderCard(testimonial, index))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
