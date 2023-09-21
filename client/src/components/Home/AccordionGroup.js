import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Button from '@mui/material/Button';

export default function AccordionNoDivider() {
  return (
    <div style={{ margin: "0px 80px" }}>
      <AccordionGroup transition={{
        initial: "0.2s ease-out",
        expanded: "0.2s ease",
      }}
        sx={{ maxWidth: '100%' }}>
        <Accordion>
          <AccordionSummary>DEPARTMENT VISION</AccordionSummary>
          <AccordionDetails>
            To be a prime center of excellence by transforming students into globally competent IT professionals.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>DEPARTMENT MISSION</AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>M1  : To develop, support and maintain state-of-art infrastructure to serve as a potent resource hub for IT industries.</li>
              <li>M2  : To inculcate the problem solving, analytical, logical skills and to promote the culture of creativity and innovation among the students.</li>
              <li>M3  : To adapt with the transformation of the technology emphasizing on inter-disciplinary studies , exposure to emerging technologies and imbibing high standards of professional ethics and social responsibilities in all endeavors</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>PROGRAM EDUCATIONAL OBJECTIVES (PEO)</AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>PEO 1 PREPARATION: To make students competent for higher studies and employable, to meet industrial requirements.</li>
              <li>PEO 2 CORE COMPETENCE: To develop students having core competence in science,mathematics and fundamentals of Information Technology to address everchanging industrial requirements globally.</li>
              <li>PEO 3 BREADTH: To create academically conducive environment to learn engineering skills in the domains such as Database, Data Analytics, Application Development and Allied Technologies.</li>
              <li>PEO 4 PROFESSIONALISM: To enrich students with professional ethics, leadership qualities, and entrepreneurial skills.</li>
              <li>PEO 5 LIFE LONG LEARNING: An ability to engage in lifelong learning for effective adaptation to technological developments.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>PROGRAM SPECIFIC OUTCOME (PSO)</AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>To use modern computer languages,environments and platforms in creating innovative carrier paths in the areas of database,data analysis and application development.</li>
              <li>To apply theoretical foundations of Information technology in developing solutions for engineering problems that meet automation needs of industry and society.</li>
              <li>To design and implement efficient real-time solutions using evolving knowledge of information technology by demonstrating the practices of professional ethics and the concern for societal and environment well being.and social responsibilities in all endeavors</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>PROGRAM OUTCOMES</AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.</li>
              <li>Problem Analysis: Identify, formulate, research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
              <li>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.</li>
              <li>Conduct investigations of complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
              <li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling to complex engineering activities, with an understanding of the limitations.</li>
              <li>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
              <li>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
              <li>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
              <li>Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
              <li>Communication: Communicate effectively on complex engineering activities with the engineering community and with the society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
              <li>Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
              <li>Life-long learning: Recognise the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>DEPARTMENTAL MAGAZINE : BITS & BYTES VOL. 1 & 2</AccordionSummary>
          <AccordionDetails>
            <ul>
                <li> 
                  <Button variant="contained" size="small">
                    Vol 1
                  </Button>
              </li>
              <li style={{marginTop:'10px'}}>
                  <Button variant="contained" size="small">
                    Vol 2
                  </Button>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}