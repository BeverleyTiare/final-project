import React from 'react';

const Epigenetics = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-8">
        <h1 className="text-4xl text-white font-bold">Epigenetics and sleep</h1>
      </header>
    <div className="px-8">
      <img src="assets/baby.png" alt="sleeping baby" />
      <p className="my-4 text-white" style={{ textAlign: 'left', paddingRight: '20%' }}>
          Sleep deprivation disrupts the lives of millions of people every day and has a profound impact on the molecular biology of the brain.
          <br />  
          These effects begin as changes within a neuron, at the DNA and RNA level, and result in alterations in neuronal plasticity and dysregulation of many cognitive functions including learning and memory.
          <br />
          The epigenome plays a critical role in regulating gene expression in the context of memory storage. In a therapeutic review article (link below), the effects of epigenetic alterations on the regulation of gene expression are discussed,  focusing on the most common epigenetic mechanisms:
          <br />
          (i) DNA methylation;
          <br />
          (ii) histone modifications; and
          <br />
          (iii) non-coding RNAs.
          <br />
          Evidence suggesting that sleep loss impacts the epigenome and that these epigenetic alterations might mediate the changes in cognition seen following disruption of sleep is also outlined.
          <br />
          The link between sleep and the epigenome is only beginning to be elucidated, but clear evidence exists that epigenetic alterations occur following sleep deprivation.
          <br />
          In the future, these changes to the epigenome could be utilized as biomarkers of sleep loss or as therapeutic targets for sleep-related disorders.</p>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5835037/" className="text-white">Learn more</a>
        <p className="my-4 text-white" style={{ textAlign: 'left', paddingRight: '20%' }}>
          Integer nec augue sed ipsum porttitor efficitur. Duis vehicula lorem nec sem semper, at commodo est luctus.
        </p>
        <p className="my-4 text-white" style={{ textAlign: 'left', paddingRight: '20%' }}>
          Sed id tristique sem, sed interdum risus. Nam et tincidunt mi. Ut dapibus erat vel velit venenatis volutpat. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default Epigenetics;

