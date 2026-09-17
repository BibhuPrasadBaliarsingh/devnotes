export const hrInterviewQuestionsContent = {
  id: 'hr-interview-questions',
  slug: 'hr-interview-questions',
  title: 'HR Interview Questions',
  subtitle: 'Behavioral Interview Preparation & Career Guide',
  category: 'Interview Preparation',
  description:
    'Essential HR & behavioral interview preparation: STAR method (Situation, Task, Action, Result), standard questions, salary negotiation strategies, conflict resolution, and career growth tips.',
  sections: [
    {
      id: 'introduction-to-hr-interviews',
      title: '1. Introduction to HR Interviews',
      summary:
        'Understand what HR evaluates, how to prepare your mindset, and the areas you should cover before walking into an HR interview.',
      content: [
        {
          type: 'paragraph',
          text: 'An HR interview evaluates more than technical knowledge. The interviewer wants to understand how you communicate, behave in professional situations, work with others, respond to challenges, align with the organization, and approach your career. A strong HR interview combines preparation, honesty, self-awareness, and clear communication.',
        },
        {
          type: 'heading',
          text: 'What HR Evaluates',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Communication skills: Whether you can explain your thoughts clearly and professionally.',
            'Confidence: Whether you can discuss your skills and experiences without being arrogant.',
            'Teamwork: How effectively you collaborate with people who have different opinions and working styles.',
            'Adaptability: How you respond when requirements, priorities, tools, or circumstances change.',
            'Problem-solving attitude: Whether you focus on finding practical solutions instead of only describing problems.',
            'Professionalism: Your attitude toward deadlines, responsibilities, colleagues, managers, and company policies.',
            'Self-awareness: Whether you understand your strengths, weaknesses, achievements, and areas for improvement.',
            'Motivation: Why you want the position and whether your expectations align with the role.',
            'Career direction: Whether you have realistic short-term and long-term professional goals.',
            'Cultural and role alignment: Whether your working preferences and professional behavior fit the responsibilities of the position.',
          ],
        },
        {
          type: 'heading',
          text: 'HR Interview Preparation Mindset',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Understand the job description before the interview.',
            'Research the company, its products or services, industry, and recent publicly available information.',
            'Prepare several real examples from academics, internships, projects, jobs, volunteering, or other relevant experiences.',
            'Practice speaking rather than memorizing complete answers word-for-word.',
            'Keep answers specific and support important claims with examples.',
            'Be honest when you do not know something instead of inventing an answer.',
            'Maintain a positive and professional tone even when discussing previous employers or difficult situations.',
            'Prepare thoughtful questions to ask the interviewer.',
            'Review your resume because every project, technology, achievement, and responsibility mentioned can become an interview question.',
          ],
        },
        {
          type: 'table',
          headers: ['Area', 'What to Prepare', 'Example Evidence'],
          rows: [
            ['Communication', 'Clear and concise answers', 'Explaining a project to a non-technical person'],
            ['Teamwork', 'Collaboration examples', 'Working with teammates during a project'],
            ['Problem Solving', 'Challenge and solution stories', 'Fixing a production or project issue'],
            ['Leadership', 'Initiative examples', 'Taking ownership of an important task'],
            ['Adaptability', 'Learning or change examples', 'Learning a new framework under a deadline'],
            ['Career Goals', 'Short- and long-term direction', 'Becoming a stronger full-stack developer'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Preparation Rule',
          text: 'Prepare stories, not scripts. You should know the situation, your responsibility, your actions, and the measurable result, but your delivery should sound natural.',
        },
        {
          type: 'code',
          language: 'text',
          code: `HR INTERVIEW PREPARATION CHECKLIST

  [ ] Read the job description
  [ ] Research the company
  [ ] Review your resume
  [ ] Prepare "Tell me about yourself"
  [ ] Prepare 5-7 STAR stories
  [ ] Prepare strengths and weaknesses
  [ ] Prepare achievement and failure examples
  [ ] Prepare conflict and teamwork examples
  [ ] Prepare career goals
  [ ] Research salary range
  [ ] Prepare questions for the interviewer
  [ ] Practice concise answers`,
        },
      ],
    },

    {
      id: 'star-method',
      title: '2. The STAR Method',
      summary:
        'Master the Situation-Task-Action-Result framework for answering behavioral interview questions with clarity and evidence.',
      content: [
        {
          type: 'paragraph',
          text: 'The STAR method is a structured technique for answering behavioral interview questions. It helps you move from general statements to a specific example that demonstrates what you actually did. STAR stands for Situation, Task, Action, and Result.',
        },
        {
          type: 'table',
          headers: ['Component', 'Purpose', 'What to Explain'],
          rows: [
            ['Situation', 'Set the context', 'Where and when did the situation happen?'],
            ['Task', 'Explain your responsibility', 'What were you expected to accomplish?'],
            ['Action', 'Show what you personally did', 'What steps did you take?'],
            ['Result', 'Show the outcome', 'What changed or improved because of your actions?'],
          ],
        },
        {
          type: 'heading',
          text: 'Full Worked Example',
        },
        {
          type: 'paragraph',
          text: 'Question: "Tell me about a time when you had to solve a difficult technical problem under a deadline."',
        },
        {
          type: 'code',
          language: 'text',
          code: `SITUATION:
  During a web development project, our application was working correctly in
  development but several API requests were failing after deployment.

TASK:
  I was responsible for investigating the issue and getting the application
  working before the project demonstration.

ACTION:
  I first reproduced the issue in the deployed environment. I checked the
  browser network requests, frontend environment configuration, backend logs,
  and API routes. I discovered that the production API base URL was configured
  incorrectly. I corrected the environment configuration, verified the backend
  route, rebuilt the frontend, and tested the main user flows again.

RESULT:
  The API requests started working correctly and the application was ready for
  the scheduled demonstration. I also documented the deployment configuration
  so the same issue would be easier to identify in future deployments.`,
        },
        {
          type: 'heading',
          text: 'How to Make STAR Answers Stronger',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Keep the Situation short; the interviewer mainly wants to hear what you did.',
            'Clearly separate your responsibility from the team responsibility.',
            'Use "I" when describing your individual contribution and "we" when describing genuine team work.',
            'Explain decisions and reasoning instead of only listing actions.',
            'Quantify the Result when a genuine metric is available.',
            'Choose examples relevant to the role you are applying for.',
            'Avoid blaming other people when describing difficult situations.',
            'Finish with the result or lesson learned rather than continuing indefinitely.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'STAR Formula',
          text: 'A useful practical balance is approximately 15% Situation, 15% Task, 50% Action, and 20% Result. The exact balance can vary, but your personal actions should receive the most attention.',
        },
        {
          type: 'code',
          language: 'text',
          code: `BEHAVIORAL QUESTION
  ↓
Situation  →  What happened?
  ↓
Task       →  What was your responsibility?
  ↓
Action     →  What exactly did you do?
  ↓
Result     →  What happened because of your actions?
  ↓
Lesson     →  What did you learn?`,
        },
      ],
    },

    {
      id: 'tell-me-about-yourself',
      title: '3. Tell Me About Yourself',
      summary:
        'Structure a confident, concise professional introduction that connects your background to the role.',
      content: [
        {
          type: 'paragraph',
          text: '"Tell me about yourself" is usually an invitation to give a concise professional introduction. It should not become a complete autobiography. Focus on your present professional identity, relevant experience, key strengths, and why your background connects to the role.',
        },
        {
          type: 'heading',
          text: 'Recommended Structure',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Present: State who you are professionally or academically.',
            'Background: Mention relevant education, experience, internship, or project experience.',
            'Skills: Highlight skills directly relevant to the position.',
            'Evidence: Mention one or two projects or achievements that demonstrate those skills.',
            'Future: Explain what kind of opportunity you are looking for and how it connects to the role.',
          ],
        },
        {
          type: 'heading',
          text: 'What to Include',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Your current role or educational status.',
            'Relevant professional experience.',
            'Important technical or functional skills.',
            'One or two relevant achievements or projects.',
            'Your career direction.',
            'A concise reason the role interests you.',
          ],
        },
        {
          type: 'heading',
          text: 'What to Avoid',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Long personal history unrelated to the position.',
            'Reading your resume line-by-line.',
            'Listing every technology you have ever touched.',
            'Negative comments about previous employers.',
            'Unverified claims about your abilities.',
            'A memorized speech that sounds unnatural.',
            'Discussing salary as the main reason you want the job.',
          ],
        },
        {
          type: 'code',
          language: 'text',
          code: `SAMPLE TEMPLATE

"Hi, I'm [Name]. I'm currently [current role/education].

My background is in [field], and I have experience with [relevant skills /
technologies]. During [internship/project/job], I worked on [specific
responsibility or project], where I [specific contribution].

One experience I'm particularly proud of is [achievement], because it helped
me develop [relevant skill].

I'm now looking for an opportunity where I can use my experience in
[relevant area], continue learning, and contribute to [type of work].
That's why I'm interested in this position."`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Target Length',
          text: 'Aim for roughly 60–120 seconds unless the interviewer asks for more detail. The goal is to create a useful starting point for the next questions.',
        },
      ],
    },

    {
      id: 'common-behavioral-questions',
      title: '4. Common Behavioral Questions',
      summary:
        'Prepare strong answers for strength, weakness, achievement, and failure questions using real examples.',
      content: [
        {
          type: 'paragraph',
          text: 'Behavioral questions ask about your previous experiences to understand how you approach situations at work. Use real examples whenever possible. A strong answer describes the context briefly, explains your contribution, and ends with a clear outcome or lesson.',
        },
        {
          type: 'subheading',
          text: 'Strengths',
        },
        {
          type: 'paragraph',
          text: 'Choose strengths that are relevant to the job and support them with evidence. Instead of saying "I am hardworking," explain a situation where your persistence produced a useful result.',
        },
        {
          type: 'code',
          language: 'text',
          code: `QUESTION: "What is your greatest strength?"

STRUCTURE:
  Strength → Evidence → Result → Relevance

EXAMPLE:
  "One of my strengths is taking ownership of problems. In a recent project,
  I noticed that an issue was affecting an important user flow. Instead of
  waiting for someone else to investigate it, I reproduced the problem,
  identified the cause, implemented the fix, and tested the flow. This helped
  us complete the feature on schedule. I believe this ownership mindset is
  useful for this role because it requires developers to independently
  investigate and solve issues."`,
        },
        {
          type: 'subheading',
          text: 'Weaknesses',
        },
        {
          type: 'paragraph',
          text: 'Choose a genuine but manageable weakness that does not fundamentally prevent you from performing the role. Explain the steps you are taking to improve it.',
        },
        {
          type: 'code',
          language: 'text',
          code: `QUESTION: "What is one weakness you are working on?"

GOOD STRUCTURE:
  "I noticed that [specific weakness] sometimes affected [situation].
  To improve, I started [specific action]. I now [measurement or habit],
  and this has helped me [improvement]. I am continuing to work on it by
  [ongoing action]."`,
        },
        {
          type: 'subheading',
          text: 'Greatest Achievement',
        },
        {
          type: 'paragraph',
          text: 'Select an achievement that demonstrates qualities relevant to the role. The achievement does not need to be prestigious; ownership, difficulty, measurable improvement, and learning can make a story valuable.',
        },
        {
          type: 'subheading',
          text: 'Failure Story',
        },
        {
          type: 'paragraph',
          text: 'A good failure answer demonstrates accountability and learning. Do not choose a failure that suggests serious dishonesty, negligence, or an inability to perform an essential responsibility. Explain what happened, what you learned, and what you changed afterward.',
        },
        {
          type: 'code',
          language: 'text',
          code: `FAILURE ANSWER FRAMEWORK

  1. State the situation honestly.
  2. Accept responsibility for your part.
  3. Explain what went wrong.
  4. Explain what you learned.
  5. Describe the process you changed.
  6. Explain how the new approach helped afterward.

Example closing:
  "Since then, I have started validating requirements earlier and confirming
  important assumptions before implementation. That change has helped me
  identify potential issues much earlier in subsequent projects."`,
        },
        {
          type: 'table',
          headers: ['Question', 'What the Interviewer May Explore', 'Answer Strategy'],
          rows: [
            ['What is your strength?', 'Self-awareness and evidence', 'Choose one relevant strength and prove it'],
            ['What is your weakness?', 'Honesty and improvement', 'Give a real weakness plus an improvement plan'],
            ['Greatest achievement?', 'Ownership and impact', 'Use a specific accomplishment'],
            ['Tell me about a failure.', 'Accountability and learning', 'Explain lesson and corrective action'],
            ['Why should we hire you?', 'Role alignment', 'Connect skills, evidence, and contribution'],
            ['Describe a challenge.', 'Problem solving', 'Use STAR'],
            ['What motivates you?', 'Work preferences', 'Focus on meaningful professional drivers'],
          ],
        },
      ],
    },

    {
      id: 'conflict-and-teamwork',
      title: '5. Conflict & Teamwork Questions',
      summary:
        'Handle disagreement and collaboration questions with professional, evidence-based STAR answers.',
      content: [
        {
          type: 'paragraph',
          text: 'Conflict questions are designed to understand how you handle disagreement while maintaining professional relationships. Disagreement itself is not necessarily negative; the important factors are how you communicate, evaluate evidence, protect the project objective, and reach a workable resolution.',
        },
        {
          type: 'heading',
          text: 'Handling a Disagreement',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Listen fully before responding.',
            'Clarify the actual point of disagreement.',
            'Separate the person from the problem.',
            'Use evidence, requirements, user needs, or technical constraints where appropriate.',
            'Explain your position calmly.',
            'Invite the other person to explain their reasoning.',
            'Look for a solution that supports the shared objective.',
            'Escalate only when necessary and through the appropriate process.',
            'Document important decisions when the project requires it.',
          ],
        },
        {
          type: 'code',
          language: 'text',
          code: `QUESTION: "Tell me about a disagreement with a teammate."

STAR ANSWER:

Situation:
  "During a project, a teammate and I had different opinions about how a
  feature should be implemented."

Task:
  "We needed to select an approach that would satisfy the requirements
  without creating unnecessary complexity."

Action:
  "I first asked them to explain their reasoning. I explained my concerns,
  then we compared both approaches against the requirements, maintainability,
  and expected usage. We agreed to test the key assumption with a small
  prototype."

Result:
  "The prototype gave us enough evidence to choose the approach that met the
  requirements with less complexity. More importantly, we resolved the
  disagreement based on the project needs rather than personal preference."`,
        },
        {
          type: 'heading',
          text: 'Working With Difficult Colleagues',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Do not label someone as a "bad person" or attack their personality.',
            'Focus on specific behaviors and their impact on work.',
            'Communicate expectations clearly.',
            'Try to understand whether the issue is caused by unclear requirements, workload, communication, or different priorities.',
            'Keep communication professional.',
            'Use appropriate management or escalation channels when the problem cannot be resolved directly.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Teamwork Principle',
          text: 'The strongest teamwork answers demonstrate both cooperation and constructive disagreement. Employers generally need people who can collaborate without avoiding difficult conversations.',
        },
        {
          type: 'code',
          language: 'text',
          code: `TEAMWORK STORY CHECKLIST

  Team goal      →  What were you trying to achieve?
  Your role      →  What were you responsible for?
  Collaboration  →  How did you coordinate?
  Challenge      →  What made teamwork difficult?
  Communication  →  How did you handle it?
  Result         →  What did the team accomplish?
  Learning       →  What would you repeat or improve?`,
        },
      ],
    },

    {
      id: 'leadership-and-problem-solving',
      title: '6. Leadership & Problem-Solving Questions',
      summary:
        'Demonstrate ownership, initiative, and structured problem-solving through targeted leadership examples.',
      content: [
        {
          type: 'paragraph',
          text: 'Leadership does not always mean managing people. In an interview, leadership can include taking ownership, identifying risks, helping teammates, making decisions, communicating clearly, and moving work forward without waiting for constant instructions.',
        },
        {
          type: 'heading',
          text: 'Common Leadership Questions',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Tell me about a time you took initiative.',
            'Describe a situation where you led a project or task.',
            'Tell me about a time you influenced someone without formal authority.',
            'How do you prioritize tasks when everything seems urgent?',
            'Tell me about a decision you made with incomplete information.',
            'How do you handle pressure?',
            'Describe a time when you identified a problem before others noticed it.',
            'Tell me about a time you helped a teammate improve.',
          ],
        },
        {
          type: 'heading',
          text: 'Decision-Making Under Pressure',
        },
        {
          type: 'paragraph',
          text: 'When discussing pressure, show that you can remain structured. Explain how you identified the priority, gathered the most important information available, considered risks, made a decision, communicated it, and reviewed the outcome.',
        },
        {
          type: 'code',
          language: 'text',
          code: `DECISION-MAKING FRAMEWORK

  1. Define the objective.
  2. Identify what is urgent and what is important.
  3. Gather the critical information available.
  4. Identify realistic options.
  5. Compare risks and benefits.
  6. Make a decision within the available time.
  7. Communicate the decision to relevant people.
  8. Execute and monitor the result.
  9. Adjust if new evidence appears.`,
        },
        {
          type: 'subheading',
          text: 'Problem-Solving Example',
        },
        {
          type: 'code',
          language: 'text',
          code: `QUESTION: "Tell me about a time you solved an unexpected problem."

ANSWER STRUCTURE:

Problem:
  "An unexpected issue affected [feature/process]."

Investigation:
  "I reproduced the issue and separated the problem into smaller parts."

Analysis:
  "I checked [logs/data/requirements/tests] and identified [root cause]."

Solution:
  "I implemented [solution] and tested the affected scenarios."

Result:
  "The issue was resolved and [measurable or practical outcome]."

Learning:
  "I also added [validation/test/documentation/process] to reduce the
  chance of the issue happening again."`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Leadership Tip',
          text: 'Use leadership stories where your actions demonstrate ownership without exaggerating your authority. Saying exactly what you contributed is more credible than claiming responsibility for the entire team.',
        },
      ],
    },

    {
      id: 'career-goals-and-motivation',
      title: '7. Career Goals & Motivation Questions',
      summary:
        'Answer "Why this role?", "Why this company?", and "Where do you see yourself in five years?" with clarity and direction.',
      content: [
        {
          type: 'paragraph',
          text: 'Questions about motivation and career goals help interviewers understand why you are interested in the role and how the position fits into your professional development. Connect your goals to skills, responsibilities, learning opportunities, and meaningful contribution.',
        },
        {
          type: 'heading',
          text: 'Why Do You Want This Role?',
        },
        {
          type: 'code',
          language: 'text',
          code: `A strong answer connects four elements:

  Role:
    "The role involves [relevant responsibility]."

  Skills:
    "I have experience with [relevant skills]."

  Interest:
    "I enjoy working on [relevant type of problem]."

  Growth:
    "This position would allow me to deepen my skills in [area] while
    contributing to [team/project objective]."`,
        },
        {
          type: 'heading',
          text: 'Why This Company?',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Mention a specific product, service, technology, engineering practice, or business area that genuinely interests you.',
            'Connect the company opportunity to your relevant skills.',
            'Explain what you hope to learn or contribute.',
            'Avoid making unsupported claims about the company culture.',
            'Do not make salary the only reason for your interest.',
          ],
        },
        {
          type: 'heading',
          text: 'Where Do You See Yourself in Five Years?',
        },
        {
          type: 'paragraph',
          text: 'A five-year answer should communicate direction rather than pretend that you can predict every detail of your career. Discuss the capabilities you want to develop, the level of responsibility you hope to take on, and the type of problems you want to solve.',
        },
        {
          type: 'code',
          language: 'text',
          code: `SAMPLE FIVE-YEAR ANSWER

  "In the next five years, I want to become a strong and dependable
  full-stack professional with deeper expertise in building scalable,
  maintainable applications. I would like to take ownership of increasingly
  complex features, contribute to technical decisions, and help newer
  developers when I have enough experience to do so. My immediate focus is
  building strong fundamentals, delivering quality work, and continuously
  expanding my technical and communication skills."`,
        },
        {
          type: 'table',
          headers: ['Question', 'Focus Your Answer On', 'Avoid'],
          rows: [
            ['Why this role?', 'Responsibilities, skills, contribution', 'Generic enthusiasm'],
            ['Why this company?', 'Specific company/role connection', 'Only salary or brand name'],
            ['Why should we hire you?', 'Relevant evidence and fit', 'Overconfidence'],
            ['What motivates you?', 'Meaningful work drivers', 'Only compensation'],
            ['Five-year plan?', 'Skills and responsibility growth', 'Unrealistic guarantees'],
            ['Why are you changing jobs?', 'Career development and role fit', 'Attacking your current employer'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Career-Change Question',
          text: 'If you are leaving a job, keep the explanation factual and future-focused. Explain what you are seeking next rather than turning the interview into a complaint about your current or previous employer.',
        },
      ],
    },

    {
      id: 'salary-negotiation',
      title: '8. Salary Negotiation Strategies',
      summary:
        'Research, prepare, and professionally negotiate compensation using market data and role context.',
      content: [
        {
          type: 'paragraph',
          text: 'Salary negotiation is a professional discussion about compensation and the overall employment package. Prepare using reliable market information, your experience level, role responsibilities, location, company size, and the complete compensation structure.',
        },
        {
          type: 'heading',
          text: 'Research Before Negotiating',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Research compensation ranges for the specific role and experience level.',
            'Compare multiple reliable sources instead of relying on one online salary figure.',
            'Consider location and whether the role is remote, hybrid, or on-site.',
            'Understand fixed salary versus variable compensation.',
            'Check whether bonuses, stock, joining bonuses, insurance, allowances, or other benefits are included.',
            'Consider your skills, relevant experience, portfolio, certifications, and demonstrated results.',
            'Determine your target range and minimum acceptable compensation before the conversation.',
          ],
        },
        {
          type: 'table',
          headers: ['Compensation Element', 'What to Check'],
          rows: [
            ['Base Salary', 'Fixed annual or monthly compensation'],
            ['Variable Pay', 'Performance-based or target-based component'],
            ['Bonus', 'Joining, annual, performance, or retention bonus'],
            ['Equity', 'Shares, options, vesting period, and conditions'],
            ['Benefits', 'Insurance, leave, retirement contributions, allowances'],
            ['Notice/Probation', 'Notice period and probation terms'],
            ['Work Arrangement', 'Remote, hybrid, office location, working hours'],
            ['Growth', 'Promotion cycles, learning support, role progression'],
          ],
        },
        {
          type: 'heading',
          text: 'How to Respond to Salary Expectations',
        },
        {
          type: 'code',
          language: 'text',
          code: `IF ASKED EARLY:

  "Based on my experience, the responsibilities of this role, and my research
  into comparable positions, I am targeting a compensation range of [range].
  However, I am open to discussing the complete compensation package and
  the scope of the role."

IF ASKED FOR CURRENT COMPENSATION:

  "My current compensation is [accurate figure if you choose to disclose it].
  For this move, I am looking for compensation that reflects the
  responsibilities of the new role, my relevant experience, and the value
  I can contribute."

IF THE OFFER IS LOWER THAN EXPECTED:

  "Thank you for sharing the offer. I'm genuinely interested in the role.
  Based on the responsibilities and my experience in [relevant skills], would
  there be flexibility to move the compensation closer to [target]?"`,
        },
        {
          type: 'heading',
          text: 'Negotiation Tactics',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Negotiate based on role value and evidence rather than personal financial needs.',
            'Use a researched range rather than an arbitrary number.',
            'If possible, discuss the complete package rather than only base salary.',
            'Ask whether there is flexibility in compensation components if base salary cannot change.',
            'Do not issue ultimatums unless you genuinely intend to follow through.',
            'Take time to review a written offer before accepting.',
            'Keep the tone collaborative and professional.',
            'Do not misrepresent competing offers or qualifications.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Negotiation Principle',
          text: 'The objective is a clear and mutually acceptable employment agreement. Professional negotiation does not require confrontation; preparation and evidence usually make the conversation more productive.',
        },
      ],
    },

    {
      id: 'questions-for-interviewer',
      title: '9. Questions to Ask the Interviewer',
      summary:
        'Ask thoughtful, specific questions that demonstrate genuine interest and help you evaluate the opportunity.',
      content: [
        {
          type: 'paragraph',
          text: 'Asking thoughtful questions demonstrates that you are evaluating the opportunity seriously. Select questions that were not already answered during the interview and prioritize topics that help you understand the role, expectations, team, development process, and success criteria.',
        },
        {
          type: 'heading',
          text: 'Good Questions to Ask',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'What would success look like in the first 90 days?',
            'What are the most important responsibilities for this role?',
            'What are the biggest challenges someone in this position would face?',
            'How is performance typically evaluated?',
            'What does the onboarding process look like?',
            'How is the team structured?',
            'How does the team collaborate across technical and non-technical functions?',
            'What development or learning opportunities are available?',
            'What does a typical day or week look like for this role?',
            'How are priorities and deadlines usually managed?',
            'What qualities distinguish people who perform well in this role?',
            'How does the team approach code reviews, testing, or quality assurance?',
            'What are the main projects or priorities the team is currently working on?',
            'How frequently do managers provide feedback?',
            'What are the next steps in the interview process?',
          ],
        },
        {
          type: 'table',
          headers: ['Topic', 'Useful Question'],
          rows: [
            ['Success', 'What would success look like after three to six months?'],
            ['Team', 'How is the team structured and how do members collaborate?'],
            ['Manager', 'How would you describe the management and feedback style?'],
            ['Projects', 'What are the most important projects for this team right now?'],
            ['Growth', 'What learning or career-development opportunities are available?'],
            ['Engineering', 'How does the team approach testing, reviews, and deployment?'],
            ['Challenges', 'What is the biggest challenge the team is currently solving?'],
            ['Process', 'What are the next steps after this interview?'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Ask Selectively',
          text: 'You do not need to ask all 15 questions. Choose two to five based on the conversation and the interview stage. The best questions are specific enough to generate useful information.',
        },
        {
          type: 'code',
          language: 'text',
          code: `ENDING THE INTERVIEW

  "Thank you for explaining the role and team. Before we finish, I have two
  questions.

  First, what would you consider the most important priority for the person
  joining this role during the first few months?

  Second, what are the next steps in the interview process?"

  This keeps the closing professional, focused, and concise.`,
        },
      ],
    },

    {
      id: 'body-language-and-communication',
      title: '10. Body Language & Communication Tips',
      summary:
        'Project confidence through clear speech, active listening, and professional body language in both in-person and virtual interviews.',
      content: [
        {
          type: 'paragraph',
          text: 'Professional communication involves both what you say and how you communicate it. In virtual interviews, camera positioning, audio quality, eye contact with the camera, and your surroundings also affect the overall interaction.',
        },
        {
          type: 'heading',
          text: 'Before the Interview',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Test your microphone, camera, internet connection, and interview platform.',
            'Choose a quiet and professional environment.',
            'Keep your resume and relevant notes available.',
            'Join a few minutes early.',
            'Keep your phone notifications under control.',
            'Use a professional display name on the interview platform.',
            'Dress appropriately for the company and role.',
          ],
        },
        {
          type: 'heading',
          text: 'During the Interview',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Sit upright and maintain comfortable eye contact.',
            'Use a natural speaking pace.',
            'Listen to the complete question before answering.',
            'Pause briefly when you need to organize your thoughts.',
            'Avoid interrupting the interviewer.',
            'Use concise answers and expand when asked.',
            'Use examples instead of unsupported claims.',
            'Keep facial expressions natural and professional.',
            'Show engagement through appropriate verbal acknowledgments.',
            'If you do not understand a question, politely ask for clarification.',
          ],
        },
        {
          type: 'heading',
          text: 'Active Listening',
        },
        {
          type: 'code',
          language: 'text',
          code: `ACTIVE LISTENING LOOP

  Listen
    ↓
  Understand the question
    ↓
  Pause briefly
    ↓
  Answer the exact question
    ↓
  Give evidence / example
    ↓
  Confirm the conclusion
    ↓
  Stop and allow the interviewer to continue`,
        },
        {
          type: 'table',
          headers: ['Situation', 'Better Communication'],
          rows: [
            ['Do not know the answer', 'Be honest and explain how you would find it'],
            ['Question is unclear', 'Ask the interviewer to clarify'],
            ['Need time to think', 'Pause briefly before answering'],
            ['Answer is becoming long', 'Summarize the key point and stop'],
            ['Disagree with interviewer', 'Explain your perspective respectfully'],
            ['Technical question becomes behavioral', 'Connect technical experience to your actions and result'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Confidence vs. Arrogance',
          text: 'Confidence comes from clearly explaining your skills and evidence. Arrogance often appears when candidates dismiss others, exaggerate achievements, or claim certainty without supporting evidence.',
        },
      ],
    },

    {
      id: 'common-hr-mistakes',
      title: '11. Common HR Interview Mistakes',
      summary:
        'Identify and avoid the most common pitfalls in HR interviews, from fabricated experience to negative talk.',
      content: [
        {
          type: 'paragraph',
          text: 'Many HR interview mistakes are avoidable. Preparation should focus not only on what you want to say but also on how you communicate difficult information. Stay factual, professional, and consistent with your resume and application.',
        },
        {
          type: 'heading',
          text: 'Common Mistakes to Avoid',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Arriving late without communicating the issue.',
            'Giving extremely long answers that do not address the question.',
            'Memorizing scripted answers so rigidly that they sound unnatural.',
            'Speaking negatively about former employers, managers, teachers, or colleagues.',
            'Claiming skills that you cannot demonstrate.',
            'Giving fake or exaggerated achievements.',
            'Blaming teammates for every problem.',
            'Saying that your only motivation is money.',
            'Having no questions for the interviewer when an opportunity is provided.',
            'Failing to research the company or job description.',
            'Contradicting information on your resume.',
            'Interrupting the interviewer repeatedly.',
            'Arguing aggressively when challenged.',
            'Using inappropriate language or excessive informal expressions.',
            'Discussing confidential information from previous employers.',
            'Providing false information about qualifications, employment history, or experience.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Negative Statements',
          text: 'Avoid statements such as "My manager was terrible," "My teammates were useless," or "I hated my previous company." Even when you experienced a genuine workplace problem, describe the situation factually and focus on how you handled it.',
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Fabricate Experience',
          text: 'Do not invent projects, employment history, certifications, technical skills, achievements, competing offers, or other qualifications. Interviewers may verify important claims or ask detailed follow-up questions.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Memorize Word-for-Word',
          text: 'Prepared answers are useful, but memorizing every sentence can make your response sound artificial. Prepare key points, examples, metrics, and lessons instead.',
        },
        {
          type: 'code',
          language: 'text',
          code: `BEFORE SUBMITTING AN ANSWER, ASK:

  Does it answer the question?
  Is it truthful?
  Is it relevant to the role?
  Did I explain my personal contribution?
  Did I provide evidence?
  Did I avoid blaming others?
  Did I finish with a result or lesson?
  Is the answer concise enough?`,
        },
      ],
    },

    {
      id: 'hr-interview-answer-frameworks',
      title: '12. HR Answer Frameworks & Quick Reference',
      summary:
        'Use concise mental structures for every common HR question type and review a final interview-day checklist.',
      content: [
        {
          type: 'paragraph',
          text: 'Use these frameworks as mental structures during preparation. They are not scripts. Adapt them to your actual experience and the specific question.',
        },
        {
          type: 'table',
          headers: ['Question Type', 'Recommended Framework'],
          rows: [
            ['Tell me about yourself', 'Present → Background → Skills → Evidence → Future'],
            ['Behavioral question', 'STAR (Situation → Task → Action → Result)'],
            ['Strength', 'Strength → Example → Result → Relevance'],
            ['Weakness', 'Weakness → Impact → Improvement → Progress'],
            ['Failure', 'Situation → Responsibility → Failure → Learning → Change'],
            ['Conflict', 'Context → Difference → Communication → Resolution → Learning'],
            ['Leadership', 'Challenge → Ownership → Decision → Action → Result'],
            ['Why this role?', 'Role → Skills → Interest → Contribution → Growth'],
            ['Why this company?', 'Company detail → Role connection → Interest → Contribution'],
            ['Five-year plan', 'Current capability → Skills to build → Responsibility → Direction'],
            ['Salary expectation', 'Research → Range → Evidence → Flexibility'],
            ['Career change', 'Current experience → Reason for growth → Target role → Future contribution'],
          ],
        },
        {
          type: 'heading',
          text: '30-Second Answer Test',
        },
        {
          type: 'code',
          language: 'text',
          code: `For a short HR answer:
  1. Make the main point.
  2. Give one supporting example.
  3. Explain the result or lesson.
  4. Connect it to the role if useful.

  If the interviewer wants more detail, continue with the next layer.`,
        },
        {
          type: 'heading',
          text: 'Final Interview-Day Checklist',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Review your resume.',
            'Review the job description.',
            'Research the company.',
            'Prepare your introduction.',
            'Review your STAR stories.',
            'Prepare strengths and weakness examples.',
            'Prepare a failure and learning story.',
            'Prepare teamwork and conflict examples.',
            'Prepare a leadership or initiative example.',
            'Review your career goals.',
            'Know your researched compensation range.',
            'Prepare questions for the interviewer.',
            'Test your interview setup if the interview is online.',
            'Arrive or connect on time.',
            'Stay calm, honest, and professional.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Final Principle',
          text: 'A strong HR interview is not about giving perfect answers. It is about communicating your experience clearly, demonstrating self-awareness, showing professional judgment, and giving credible evidence of how you work.',
        },
      ],
    },

    {
      id: 'hr-interview-faq',
      title: '13. Frequently Asked HR Interview Questions',
      summary:
        'Concise answers to the 20 most commonly asked HR and behavioral interview questions.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'Tell me about yourself.',
              answer:
                'Give a concise professional introduction covering your current status, relevant background, key skills, one or two supporting experiences, and the type of opportunity you are seeking.',
            },
            {
              question: 'Why should we hire you?',
              answer:
                'Connect your relevant skills and experience to the requirements of the role. Support your claims with projects, achievements, or situations where you demonstrated those abilities.',
            },
            {
              question: 'What are your strengths?',
              answer:
                'Choose one or two strengths that are relevant to the position and support them with specific examples and results.',
            },
            {
              question: 'What is your biggest weakness?',
              answer:
                'Mention a genuine, manageable weakness and explain the concrete steps you are taking to improve it. Focus on progress rather than presenting a disguised strength.',
            },
            {
              question: 'Why do you want to join our company?',
              answer:
                'Mention specific aspects of the company or role that genuinely interest you and connect them to your skills, professional goals, and potential contribution.',
            },
            {
              question: 'Why are you leaving your current job?',
              answer:
                'Keep the explanation professional and future-focused. Explain the type of growth, responsibilities, learning, or role alignment you are seeking without attacking your current employer.',
            },
            {
              question: 'Where do you see yourself in five years?',
              answer:
                'Describe the skills, responsibilities, and professional direction you want to develop. Focus on realistic growth rather than claiming a guaranteed title or position.',
            },
            {
              question: 'Tell me about a time you failed.',
              answer:
                'Describe a genuine but manageable failure, explain your responsibility, what you learned, and the specific process or behavior you changed afterward.',
            },
            {
              question: 'Tell me about a conflict with a teammate.',
              answer:
                'Use a specific example and explain how you listened, communicated, evaluated the issue, worked toward a shared objective, and reached a professional resolution.',
            },
            {
              question: 'How do you handle pressure?',
              answer:
                'Explain how you prioritize work, break complex tasks into smaller actions, communicate risks, manage deadlines, and maintain quality under pressure.',
            },
            {
              question: 'How do you handle criticism?',
              answer:
                'Explain that you listen to the feedback, clarify expectations, identify useful points, apply relevant changes, and follow up to determine whether the improvement worked.',
            },
            {
              question: 'What motivates you?',
              answer:
                'Discuss professional motivators such as solving meaningful problems, learning, ownership, collaboration, customer impact, or achieving clear goals, depending on what genuinely motivates you.',
            },
            {
              question: 'What are your salary expectations?',
              answer:
                "Use market research and the role's responsibilities to provide a reasonable range when appropriate. Keep the discussion open to the complete compensation package and scope of the role.",
            },
            {
              question: 'Are you willing to relocate?',
              answer:
                'Answer honestly based on your actual circumstances. If you have conditions or timing requirements, communicate them clearly and professionally.',
            },
            {
              question: 'Are you comfortable working in a team?',
              answer:
                'Give a specific example of collaboration. Explain your role, how you communicated, how responsibilities were coordinated, and what the team achieved.',
            },
            {
              question: 'Can you work under tight deadlines?',
              answer:
                'Explain how you prioritize critical work, communicate constraints, break tasks down, and protect important quality checks while meeting deadlines.',
            },
            {
              question: 'How do you prioritize multiple tasks?',
              answer:
                'Compare urgency, business impact, dependencies, deadlines, and effort. Confirm priorities with the appropriate stakeholder when requirements conflict.',
            },
            {
              question: 'What would you do if you disagreed with your manager?',
              answer:
                "Understand the manager's reasoning, explain your perspective respectfully with evidence, discuss alternatives, and support the final decision once a direction is established unless there is a serious ethical or policy concern.",
            },
            {
              question: 'What is your greatest achievement?',
              answer:
                'Choose an achievement that demonstrates qualities relevant to the role. Explain the challenge, your contribution, the result, and why the experience was meaningful.',
            },
            {
              question: 'Do you have any questions for us?',
              answer:
                'Ask thoughtful questions about success expectations, team structure, responsibilities, projects, feedback, growth, working practices, or the next stage of the hiring process.',
            },
          ],
        },
      ],
    },
  ],
};

export default hrInterviewQuestionsContent;
