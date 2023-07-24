import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Epigenetics = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-8">
        <h1 className="text-4xl text-white font-bold">Epigenetics and sleep</h1>
      </header>
      <div className="px-8">
        <img src="assets/baby.png" alt="sleeping baby" />
        <Container className="epiegenetics-section text-white" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", textAlign: "left" }}>
                <strong>Epigenetics is the study of how your behaviors and environment can cause changes that affect the way your genes work.
                Unlike genetic changes, epigenetic changes are reversible and do not change your DNA sequence, but they can change how your body reads a DNA sequence.</strong>
                <br />
                <br />
                When we look at the link between sleep and the epigenome, recent studies show clear evidence that <i>epigenetic alterations occur following sleep deprivation</i>.
                <br />
                <br />
                <strong>So, what are the effects of poor quality sleep?</strong>
                <br />
                Sleep deprivation disrupts the lives of millions of people every day and has a profound impact on the molecular biology of the brain.
                These changes utlimately result in alterations in neuronal plasticity and dysregulation of many cognitive functions including - <i>learning and memory</i>.
                <br />
                <br />
                The epigenome (which modifies the genome) plays a critical role in regulating gene expression in the context of memory storage.
                <br />
                <br />
                Evidence suggests that sleep loss impacts the epigenome and that these epigenetic alterations might mediate the changes in cognition seen following disruption of sleep.
                <br />
                <br />
                These effects on the regulation of gene expression focus on the most common epigenetic mechanisms:
                <br />
                <br />
                (i) <i>DNA methylation</i>;
                DNA methylation works by adding a chemical group to DNA. Typically, this group is added to specific places on the DNA, where it blocks the proteins that attach to DNA to “read” the gene.
                <br />
                <br />
                This chemical group can be removed through a process called demethylation. Typically, methylation turns genes “off” and demethylation turns genes “on.”
                <br />
                <br />
                (ii) <i>Histone modifications</i>;
                DNA wraps around proteins called histones. When histones are tightly packed together, proteins that ‘read’ the gene cannot access the DNA as easily, so the gene is turned “off.”
                <br />
                <br />
                When histones are loosely packed, more DNA is exposed or not wrapped around a histone and can be accessed by proteins that ‘read’ the gene, so the gene is turned “on.”
                <br />
                <br />
                Chemical groups can be added or removed from histones to make the histones more tightly or loosely packed, turning genes “off” or “on.”
                <br />
                <br />
                (iii) <i>Non-coding RNAs</i>;
                Your DNA is used as instructions for making coding and non-coding RNA.
                <br />
                <br />
                Coding RNA is used to make proteins. Non-coding RNA helps control gene expression by attaching to coding RNA, along with certain proteins, to break down the coding RNA so that it cannot be used to make proteins.
                <br />
                <br />
                Non-coding RNA may also recruit proteins to modify histones to turn genes “on” or “off.”
                <br />
                <br />
                {/*<Text style={{color: 'light-blue'}}
                  onPress={() => Linking.openURL('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5835037/')}>
                  Google
                </Text>*/}
                {/*<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5835037/" className="text-white">Learn more</a>*/}
              </Col>
            </Row>
          </Container>
          <div className="w-1/2 p-4 border border-gray-300">
            <p className="my-4 text-white" style={{ textAlign: 'left' }}>
              <strong>So, what do we know about sleep and health?</strong>
              <br />
              <br />
              Sleep is fundamental to recovery for our brain and body and has tangible and immediate impacts on our mental and physical wellbeing.
              <br />
              <br />
              Sleep is also important for encoding and consolidating information and memories.
              <br />
              <br />
              A lack of sleep reduces our alertness and is also linked to a range of health issues including heart disease, diabetes, stroke, obesity, and high blood pressure.
              <br />
              <br />
              Sleep deficiency or the inability to attain high-quality sleep may be due to sleep deprivation or circadian rhythm imbalance, which impacts hormone regulation primarily ghrelin and leptin levels, which can result in excessive hunger and the risk of obesity.
              <br />
              <br />
              Also, decreased sleep may lead to elevated blood pressure, which increases the risk of heart disease or stroke.
              <br />
              <br />
              Insulin, the hormone involved in blood sugar levels, is also impacted by lack of sleep, causing elevated glucose and the risk of type 2 diabetes.
              <br />
              <br />
              Lack of sleep alters immune system responses to viruses and infections, resulting in chronic low-level inflammation, which factors into many medical conditions including heart disease, stroke, diabetes, arthritis, and premature aging.
              <br />
              <br />
              In regard to cognitive performance, attention concentrating planning, and learning new skills, poor sleep also plays a role.
              <br />
              <br />
              Memory consolidation, which occurs during slow-wave sleep cycles and the subsequent rapid eye movement (REM) phase or dreaming sleep, is likewise influenced by lack of sleep.
              <br />
              <br />
              Sleep is associated also with emotion regulation, coping skills, and decision-making.
            </p>
            <p className="my-4" style={{ textAlign: 'left', color: 'lightblue', paddingBottom: '20%' }}>
                <strong>To learn evidence-based tips to promote quality sleep, complete our survey and receive your personalized sleep plan!</strong>
          </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Epigenetics;










