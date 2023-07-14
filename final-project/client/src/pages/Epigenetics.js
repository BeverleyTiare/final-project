import React from 'react';

const Epigenetics = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Epigenetics and sleep</h1>
      </header>
      <div className="px-8">
      <img src="./assets/baby.jpg" alt="Epigenetics and sleep" />
        <p className="my-4">
        Sleep deprivation disrupts the lives of millions of people every day and has a profound impact on the molecular biology of the brain. These effects begin as changes within a neuron, at the DNA and RNA level, and result in alterations in neuronal plasticity and dysregulation of many cognitive functions including learning and memory. The epigenome plays a critical role in regulating gene expression in the context of memory storage. In this review article, we begin by describing the effects of epigenetic alterations on the regulation of gene expression, focusing on the most common epigenetic mechanisms: (i) DNA methylation; (ii) histone modifications; and (iii) non-coding RNAs. We then discuss evidence suggesting that sleep loss impacts the epigenome and that these epigenetic alterations might mediate the changes in cognition seen following disruption of sleep. The link between sleep and the epigenome is only beginning to be elucidated, but clear evidence exists that epigenetic alterations occur following sleep deprivation. In the future, these changes to the epigenome could be utilized as biomarkers of sleep loss or as therapeutic targets for sleep-related disorders.
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5835037/">Learn more</a>
        </p>
        <p className="my-4">
          Integer nec augue sed ipsum porttitor efficitur. Duis vehicula lorem nec sem semper, at
          commodo est luctus.
        </p>
        <p className="my-4">
          Sed id tristique sem, sed interdum risus. Nam et tincidunt mi. Ut dapibus erat vel velit
          venenatis volutpat. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default Epigenetics;

