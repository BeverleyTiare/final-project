import React from 'react';

const PreventativeHealthcare = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Preventative Healthcare</h1>
      </header>
      <div className="px-8">
      <img src="./assets/health.jpg" alt="sleeping baby" />
        <p className="my-4">
        Sleep accounts for one-quarter to one-third of the human lifespan. But what exactly happens when you sleep? Before the 1950s, most people believed sleep was a passive activity during which the body and brain were dormant. “But it turns out that sleep is a period during which the brain is engaged in a number of activities necessary to life—which are closely linked to quality of life,” says Johns Hopkins sleep expert and neurologist Mark Wu, M.D.
        <a href="https://www.americanbrainfoundation.org/why-sleep-matters-for-brain-health/">Learn more</a>
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

export default PreventativeHealthcare;

