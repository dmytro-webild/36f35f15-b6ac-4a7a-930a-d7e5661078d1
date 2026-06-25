import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-shopping_23-2149151648.jpg",        "http://img.b2bpic.net/free-photo/brunette-woman-with-paper-bag-full-healthy-food_23-2148173305.jpg",        "http://img.b2bpic.net/free-photo/portrait-beautiful-afro-american-woman_23-2148332136.jpg",        "http://img.b2bpic.net/free-photo/close-up-young-man-food-market_23-2149082575.jpg",        "http://img.b2bpic.net/free-photo/view-smiles-woman-looking-notebook_197531-33563.jpg"]}
      avatarText="Trusted by local food lovers"
      title="Authentic Flavors at Sony KMB Market"
      description="Your local destination for exotic Indian cuisine, premium spices, basmati rice, and everyday essentials in San Secondo Parmense."
      primaryButton={{
        text: "Explore Products",        href: "#products"}}
      secondaryButton={{
        text: "Get Directions",        href: "#contact"}}
      names={[
        "Basmati Rice",        "Exotic Spices",        "Fresh Produce",        "Healthy Staples"]}
      imageSrc="http://img.b2bpic.net/free-photo/salad-bar-with-various-fresh-vegetables-supermarket_627829-7282.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="For those who love exotic cuisine, this Indian market is a godsend. You can find everything from essentials to specialized spices that elevate every dish."
      author="Ombretta C."
      role="Local Guide"
      imageSrc="https://images.pexels.com/photos/27175527/pexels-photo-27175527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=27175527"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Our Selection"
      title="Fresh & Authentic Ingredients"
      description="Discover a wide variety of high-quality products sourced for authentic home cooking."
      items={[
        {
          title: "Premium Basmati Rice",          description: "Long-grain aromatic rice.",          imageSrc: "http://img.b2bpic.net/free-photo/half-top-view-raw-rice-inside-brown-plate-dark-grey-surface_140725-89971.jpg"},
        {
          title: "Exotic Spice Blends",          description: "Hand-picked traditional flavors.",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-various-spices_23-2149444654.jpg"},
        {
          title: "Organic Coconut Milk",          description: "Rich and creamy for curries.",          imageSrc: "http://img.b2bpic.net/free-photo/summer-dessert-ice-cream-ice-cream-with-coconut_185193-110747.jpg"},
        {
          title: "Fresh Exotic Fruits",          description: "Seasonal and tropical selections.",          imageSrc: "http://img.b2bpic.net/free-photo/pink-pomegranate_1122-1230.jpg"},
        {
          title: "Traditional Snacks",          description: "Crispy, authentic savory treats.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-cone-shape-fried-corn-snacks-bucket-sack-cloth-with-pine-nuts-wooden-bowl-with-shelled-sunflower-seeds-with-glass-orange-juice-wooden-table_141793-88869.jpg"},
        {
          title: "Healthy Legumes",          description: "A staple for plant-based proteins.",          imageSrc: "http://img.b2bpic.net/free-photo/red-yellow-green-lentils-brown-bowls-black-stone-table-top-view_176474-2113.jpg"},
        {
          title: "Cooking Staples",          description: "Oils, ghee, and pantry basics.",          imageSrc: "http://img.b2bpic.net/free-photo/raw-pasta-with-basket-cherry-tomatoes-bottle-olive-oil_114579-66674.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Quality Assured"
      title="Serving Our Community"
      description="We are proud to serve San Secondo Parmense with diverse ingredients."
      metrics={[
        {
          value: "100+",          title: "Products Available",          description: "Spices, rice, and fresh goods.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-rice-meal-uncooked-rice-with-spoon-notebook_140725-134554.jpg"},
        {
          value: "5.0",          title: "Customer Rating",          description: "Based on community reviews.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-recyclable-bag-with-fresh-healthy-food_23-2148685837.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Voices"
      title="What Our Shoppers Say"
      description="Hear from our local patrons about their experience at Sony KMB Market."
      testimonials={[
        {
          name: "ShuB RamGarhia",          role: "Shopper",          quote: "Nice work!",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-buying-parsley_23-2148648919.jpg"},
        {
          name: "Ombretta Corradi",          role: "Local Guide",          quote: "For those who love exotic cuisine, this Indian market is a godsend.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-indian-woman-market-stall_23-2151996312.jpg"},
        {
          name: "Jonny Giacomelli",          role: "Local Guide",          quote: "Huge variety of choice.",          imageSrc: "http://img.b2bpic.net/free-photo/funny-woman-with-vegetables_23-2147700718.jpg"},
        {
          name: "Local Patron",          role: "Community Member",          quote: "Very friendly service every visit.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg"},
        {
          name: "Happy Customer",          role: "Regular Shopper",          quote: "Clean and well organized selection.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660771.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Help"
      title="Common Questions"
      description="Everything you need to know about visiting Sony KMB Market."
      items={[
        {
          question: "What are your opening hours?",          answer: "We are typically open from 8:30 AM. Please call to confirm daily hours."},
        {
          question: "Where are you located?",          answer: "Via G. Matteotti, 49, 43017 San Secondo Parmense PR."},
        {
          question: "Do you accept special orders?",          answer: "We strive to offer a wide variety; feel free to ask about specific items."},
        {
          question: "How can I contact the store?",          answer: "You can reach us at 351 261 7506."},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Find Us"
      text="Visit us in San Secondo Parmense today for authentic ingredients."
      primaryButton={{
        text: "Call Now",        href: "tel:+393512617506"}}
      secondaryButton={{
        text: "Get Directions",        href: "https://maps.google.com/?q=Via+G.+Matteotti,+49,+43017+San+Secondo+Parmense+PR"}}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
