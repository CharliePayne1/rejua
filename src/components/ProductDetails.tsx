import React from 'react';

export function ProductDetails() {
  const studies = [
    {
      claim: 'Reduces wrinkles and fine lines',
      link: 'https://karger.com/spp/article-abstract/27/3/113/295769/Oral-Intake-of-Specific-Bioactive-Collagen',
    },
    {
      claim: 'Improves skin elasticity',
      link: 'https://karger.com/spp/article-abstract/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides',
    },
    {
      claim: 'Decreases cellulite',
      link: 'https://www.liebertpub.com/doi/10.1089/jmf.2015.0022',
    },
    {
      claim: 'Increases hair thickness',
      link: 'https://www.nutrafoods.eu/index.php/nutra/article/view/9/6',
    },
    {
      claim: 'Improves nail growth and strength',
      link: 'https://onlinelibrary.wiley.com/doi/10.1111/jocd.12393',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#9A2D2D] mb-8 text-center">
          The Science
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700">
              Collagen is a powerful protein that gives structure and resilience
              to our skin, hair, nails, bones, and joints—essentially the "glue"
              that holds us together. But starting in our early 20s, natural
              collagen production begins to slow, causing our skin to lose
              elasticity, our hair to thin, and our joints to feel less
              flexible.
            </p>
            <p className="text-gray-700">
              This is where our products come in. With a formula focused on
              effectiveness and purity, we provide your body with high-quality
              collagen and essential amino acids that help stimulate your body’s
              own collagen production at the cellular level.
            </p>
            <p className="text-gray-700">
              Studies show that supplementing with collagen peptides provides
              key amino acids (the building blocks of proteins) directly to
              fibroblasts, the cells responsible for collagen synthesis. By
              supporting these cells, we help the body maintain healthier skin
              and connective tissues, tackling aging from the inside out.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#9A2D2D]">
              Clinical Studies
            </h3>
            <ul className="space-y-4">
              {studies.map((study, index) => (
                <li key={index}>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B84C4C] hover:text-[#9A2D2D] transition-colors"
                  >
                    {study.claim} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#9A2D2D]">
              Ingredients
            </h3>
            <p className="text-gray-700">
              Type I & III Bovine Collagen, Natural Flavourings (Peach &
              Elderflower), Natural Sweetener (Stevia Extract), Coconut Amino
              Acid Blend Plus, Leaf Extract (Aloe Vera), Vitamin C (as Ascorbic
              Acid), Hyaluronic Acid, Nicotinamide, Riboflavin, Copper
              Bisglycinate, D-Biotin, Sodium Selenite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
