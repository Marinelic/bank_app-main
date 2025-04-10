import { features } from "../constants";
import styles, { layout } from "../style";
import Button from './Button';


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[10px] ${index !== features.length - 1 ? 'mb:6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-discount-gradient`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>

      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)


function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You focus on the business, <br className="sm:block hidden" /> we’ll take care of the finances.</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-6`}>
           The right credit card can help you build credit, earn rewards, and save money—but with so many options available, choosing the best one can be challenging.
        </p>

        <Button styles='mt-10'/>
      </div>

      <div className={`${styles.sectionImg} flex-col`}>
        {features.map((feature, index) => (
         <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
