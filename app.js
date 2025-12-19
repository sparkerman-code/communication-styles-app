const questions = [
  { pairId: 1, options: [{ text: "I like action.", responseNumber: 1 }, { text: "I deal with problems in a systematic way.", responseNumber: 2 }] },
  { pairId: 2, options: [{ text: "I believe that teams are more effective than individuals.", responseNumber: 3 }, { text: "I enjoy motivation very much.", responseNumber: 4 }] },
  { pairId: 3, options: [{ text: "I am more interested in the future than the past.", responseNumber: 5 }, { text: "I enjoy working with people.", responseNumber: 6 }] },
  { pairId: 4, options: [{ text: "I like to attend well organized group meetings.", responseNumber: 7 }, { text: "Deadlines are very important to me.", responseNumber: 8 }] },
  { pairId: 5, options: [{ text: "I cannot stand procrastination.", responseNumber: 9 }, { text: "I believe that new ideas have to be tested before being used.", responseNumber: 10 }] },
  { pairId: 6, options: [{ text: "I enjoy the stimulation of interaction with others.", responseNumber: 11 }, { text: "I am always looking for new possibilities.", responseNumber: 12 }] },
  { pairId: 7, options: [{ text: "I want to set up my own objectives.", responseNumber: 13 }, { text: "When I start something, I go through until the end.", responseNumber: 14 }] },
  { pairId: 8, options: [{ text: "I basically try to understand other people’s emotions.", responseNumber: 15 }, { text: "I do challenge people around me.", responseNumber: 16 }] },
  { pairId: 9, options: [{ text: "I look forward to receiving feedback on my performance.", responseNumber: 17 }, { text: "I find the step-by-step approach very effective.", responseNumber: 18 }] },
  { pairId: 10, options: [{ text: "I think I am good at reading people.", responseNumber: 19 }, { text: "I like creative problem-solving.", responseNumber: 20 }] },
  { pairId: 11, options: [{ text: "I extrapolate and project all the time.", responseNumber: 21 }, { text: "I am sensitive to others’ needs.", responseNumber: 22 }] },
  { pairId: 12, options: [{ text: "Planning is the key to success.", responseNumber: 23 }, { text: "I become impatient with long deliberations.", responseNumber: 24 }] },
  { pairId: 13, options: [{ text: "I am cool under pressure.", responseNumber: 25 }, { text: "I value experience very much.", responseNumber: 26 }] },
  { pairId: 14, options: [{ text: "I listen to people.", responseNumber: 27 }, { text: "People say that I am a fast thinker.", responseNumber: 28 }] },
  { pairId: 15, options: [{ text: "Cooperation is a key word for me.", responseNumber: 29 }, { text: "I use logical methods to test alternatives.", responseNumber: 30 }] },
  { pairId: 16, options: [{ text: "I like to handle several projects at the same time.", responseNumber: 31 }, { text: "I always question myself.", responseNumber: 32 }] },
  { pairId: 17, options: [{ text: "I learn by doing.", responseNumber: 33 }, { text: "I believe that my head rules my heart.", responseNumber: 34 }] },
  { pairId: 18, options: [{ text: "I can predict how others may react to a certain action.", responseNumber: 35 }, { text: "I do not like details.", responseNumber: 36 }] },
  { pairId: 19, options: [{ text: "Analysis should always precede action.", responseNumber: 37 }, { text: "I am able to assess the climate of a group.", responseNumber: 38 }] },
  { pairId: 20, options: [{ text: "I have a tendency to start things and not finish them.", responseNumber: 39 }, { text: "I perceive myself as decisive.", responseNumber: 40 }] },
  { pairId: 21, options: [{ text: "I search for challenging tasks.", responseNumber: 41 }, { text: "I rely on observation and data.", responseNumber: 42 }] },
  { pairId: 22, options: [{ text: "I can express my feelings openly.", responseNumber: 43 }, { text: "I like to design new projects.", responseNumber: 44 }] },
  { pairId: 23, options: [{ text: "I enjoy reading very much.", responseNumber: 45 }, { text: "I perceive myself as a facilitator.", responseNumber: 46 }] },
  { pairId: 24, options: [{ text: "I like to focus on one issue at a time.", responseNumber: 47 }, { text: "I like to achieve.", responseNumber: 48 }] },
  { pairId: 25, options: [{ text: "I enjoy learning about others.", responseNumber: 49 }, { text: "I like variety.", responseNumber: 50 }] },
  { pairId: 26, options: [{ text: "Facts speak for themselves.", responseNumber: 51 }, { text: "I use my imagination as much as possible.", responseNumber: 52 }] },
  { pairId: 27, options: [{ text: "I am impatient with long, slow assignments.", responseNumber: 53 }, { text: "My mind never stops working.", responseNumber: 54 }] },
  { pairId: 28, options: [{ text: "Key decisions have to be made in a cautious way.", responseNumber: 55 }, { text: "I strongly believe that people need each other to get work done.", responseNumber: 56 }] },
  { pairId: 29, options: [{ text: "I usually make decisions without thinking too much.", responseNumber: 57 }, { text: "Emotions create problems.", responseNumber: 58 }] },
  { pairId: 30, options: [{ text: "I like to be liked by others.", responseNumber: 59 }, { text: "I can put two and two together very quickly.", responseNumber: 60 }] },
  { pairId: 31, options: [{ text: "I try out my new ideas on people.", responseNumber: 61 }, { text: "I believe in the scientific approach.", responseNumber: 62 }] },
  { pairId: 32, options: [{ text: "I like to get things done.", responseNumber: 63 }, { text: "Good relationships are essential.", responseNumber: 64 }] },
  { pairId: 33, options: [{ text: "I am impulsive.", responseNumber: 65 }, { text: "I accept differences in people.", responseNumber: 66 }] },
  { pairId: 34, options: [{ text: "Communicating with people is an end in itself.", responseNumber: 67 }, { text: "I like to be intellectually stimulated.", responseNumber: 68 }] },
  { pairId: 35, options: [{ text: "I like to organize.", responseNumber: 69 }, { text: "I usually jump from one task to another.", responseNumber: 70 }] },
  { pairId: 36, options: [{ text: "Talking and working to people is a creative act.", responseNumber: 71 }, { text: "Self-actualization is a key word for me.", responseNumber: 72 }] },
  { pairId: 37, options: [{ text: "I enjoy playing with ideas.", responseNumber: 73 }, { text: "I dislike to waste time.", responseNumber: 74 }] },
  { pairId: 38, options: [{ text: "I enjoy doing what I am good at.", responseNumber: 75 }, { text: "I learn by interacting with others.", responseNumber: 76 }] },
  { pairId: 39, options: [{ text: "I find abstractions interesting and enjoyable.", responseNumber: 77 }, { text: "I am patient with details.", responseNumber: 78 }] },
  { pairId: 40, options: [{ text: "I like brief, to the point systems.", responseNumber: 79 }, { text: "I feel confident in myself.", responseNumber: 80 }] }
];



let currentQuestionIndex = 0;
let selectedResponses = [];

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  document.getElementById("question-counter").textContent =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  document.getElementById("option-a").textContent = question.options[0].text;
  document.getElementById("option-b").textContent = question.options[1].text;

  // Update progress bar
  const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progressPercent + "%";

  // Update numeric progress
  document.getElementById("progress-text").textContent = Math.round(progressPercent) + "% complete";
}



function selectOption(optionIndex) {
  const selectedOption =
    questions[currentQuestionIndex].options[optionIndex];

  selectedResponses.push({
    responseNumber: selectedOption.responseNumber,
    text: selectedOption.text,
    points: 1
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
  showPreScoring();
}

}

document.getElementById("option-a").onclick = () => selectOption(0);
document.getElementById("option-b").onclick = () => selectOption(1);

renderQuestion();

function showPreScoring() {
  const app = document.getElementById("app");

  app.innerHTML = `
  <h2>Select the 5 statements that describe you best</h2>
  <p>You have selected <span id="selected-count">0</span> of 5</p>
  <div id="statements" style="
      max-height: 400px; 
      overflow-y: auto; 
      border: 1px solid #ccc; 
      padding: 10px;
      margin-bottom: 10px;
  "></div>
  <button id="continue-btn" disabled>Continue</button>
`;


  const statementsDiv = document.getElementById("statements");

  selectedResponses.forEach((response, index) => {
    const button = document.createElement("button");
    button.textContent = response.text;

    button.onclick = () => toggleHighlight(index, button);

    statementsDiv.appendChild(button);
  });

  // ATTACH CLICK HANDLER TO CONTINUE BUTTON
  const continueBtn = document.getElementById("continue-btn");
  continueBtn.onclick = () => {
    applyBonusPoints();
    showResults();
  };
}


function toggleHighlight(index, button) {
  const response = selectedResponses[index];

  const highlightedCount = selectedResponses.filter(
    r => r.isHighlighted
  ).length;

  if (!response.isHighlighted && highlightedCount >= 5) {
    alert("You can only select 5 statements.");
    return;
  }

  response.isHighlighted = !response.isHighlighted;
  button.classList.toggle("highlighted");

  const count = selectedResponses.filter(r => r.isHighlighted).length;

  document.getElementById("selected-count").textContent = count;
  document.getElementById("continue-btn").disabled = count !== 5;
}

function applyBonusPoints() {
  selectedResponses.forEach(response => {
    if (response.isHighlighted) {
      response.points += 5;
    }
  });
}

const styles = {
  Blue: [1,8,9,13,17,24,26,31,33,40,41,48,50,53,57,63,65,70,74,79],
  Green: [2,7,10,14,18,23,25,30,34,37,42,47,51,55,58,62,66,69,75,78],
  Red: [3,6,11,15,19,22,27,29,35,38,43,46,49,56,59,64,67,71,76,80],
  Yellow: [4,5,12,16,20,21,28,32,36,39,44,45,52,54,60,61,68,72,73,77]
};

function calculateScores() {
  const totals = {
    Blue: 0,
    Green: 0,
    Red: 0,
    Yellow: 0
  };

  selectedResponses.forEach(response => {
    for (const style in styles) {
      if (styles[style].includes(response.responseNumber)) {
        totals[style] += response.points;
      }
    }
  });

  return totals;
}

function showResults() {
  const scores = calculateScores();
  const totalScore = Object.values(scores).reduce((a,b)=>a+b,0);
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const app = document.getElementById("app");
  app.innerHTML = `<h2>Your Communication Styles</h2>`;

  // Container for pie chart
  app.innerHTML += `<canvas id="styleChart" width="300" height="300"></canvas>`;

  sortedScores.forEach(([style, score]) => {
    const info = styleInfo[style];
    app.innerHTML += `
      <div class="style-section" style="border-left: 8px solid ${info.color};">
        <h3 style="color: ${info.color};">${info.title}: ${score}</h3>
        <p><strong>Voice & Approach:</strong> ${info.voice}</p>
        <p><strong>Strengths & Challenges:</strong> ${info.strengths}<br>${info.challenges}</p>
        <p><strong>Tips for Communicating With ${style}s:</strong></p>
        <ul>
          ${info.tips.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
    `;
  });

  // Pie chart using Chart.js
  createPieChart(scores);
}



const styleInfo = {
  Blue: {
    title: "Blue – Action",
    color: "#007bff",
    voice: "You are direct, energetic, and results-focused. You like making quick decisions, moving projects forward, and seeing tangible progress.",
    strengths: "Decisive, pragmatic, efficient, takes initiative, keeps projects moving forward.",
    challenges: "Can be impatient with details or overlook others’ feelings. To improve, pause to consider input from others, slow down for complex decisions, and check in with your team.",
    tips: [
      "Focus on results first (state conclusions upfront)",
      "Keep messages concise and practical",
      "Give your best recommendation rather than many options",
      "Use visuals to illustrate your points"
    ]
  },
  Green: {
    title: "Green – Process",
    color: "#28a745",
    voice: "You are thoughtful, systematic, and evidence-driven. You prefer careful planning, step-by-step approaches, and ensuring accuracy in everything you do.",
    strengths: "Logical, detail-oriented, patient, reliable, thorough in analysis.",
    challenges: "Can appear slow or overly cautious, may overanalyze and delay decisions. To improve, set clear deadlines, balance detail with action, and trust your instincts when appropriate.",
    tips: [
      "Provide clear facts and organized explanations",
      "Break down recommendations into steps",
      "Offer options with pros and cons",
      "Avoid rushing them; let them review and reflect"
    ]
  },
  Red: {
    title: "Red – People",
    color: "#dc3545",
    voice: "You are warm, empathetic, and relationship-focused. You pay attention to others’ needs, motivations, and emotions, and value harmony and connection.",
    strengths: "Caring, perceptive, supportive, attuned to emotions, strong team player.",
    challenges: "Can take things personally or overemphasize harmony over results. To improve, balance empathy with task focus, express difficult feedback constructively, and maintain boundaries when needed.",
    tips: [
      "Allow for relationship building before getting into business",
      "Emphasize the impact on relationships",
      "Show how ideas worked well in the past",
      "Indicate support from respected people"
    ]
  },
  Yellow: {
    title: "Yellow – Ideas",
    color: "#ffc107",
    voice: "You are imaginative, curious, and full of ideas. You love exploring possibilities, thinking creatively, and finding innovative approaches.",
    strengths: "Innovative, inspiring, conceptually driven, open-minded, enthusiastic about possibilities.",
    challenges: "Can get distracted by new ideas, jump between topics, or appear unrealistic. To improve, focus on prioritizing ideas, follow through on key tasks, and connect abstract ideas to concrete outcomes.",
    tips: [
      "Allow time for discussion and exploration; be patient with tangents",
      "Frame topics conceptually and highlight uniqueness",
      "Emphasize future impact and long-term value",
      "In writing, start with the big picture and then get to specifics"
    ]
  }
};

function createPieChart(scores) {
  const ctx = document.getElementById('styleChart').getContext('2d');

  const styleLabels = {
    Blue: "Action",
    Green: "Process",
    Red: "People",
    Yellow: "Ideas"
  };

  const chartLabels = Object.keys(scores).map(key => styleLabels[key]);

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: chartLabels,
      datasets: [{
        data: Object.values(scores),
        backgroundColor: [
          styleInfo.Blue.color,
          styleInfo.Green.color,
          styleInfo.Red.color,
          styleInfo.Yellow.color
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            generateLabels: (chart) => {
              return chart.data.labels.map((label, i) => {
                const value = chart.data.datasets[0].data[i];
                return {
                  text: `${label} – ${value}`,
                  fillStyle: chart.data.datasets[0].backgroundColor[i],
                  index: i
                };
              });
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a,b)=>a+b,0);
              const percentage = ((value/total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold',
            size: 14
          },
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];
            return `${label}: ${value}`;
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

function showInstructions() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h2>Communication Styles Self-Assessment</h2>
    <p>Welcome! This short exercise will help you understand your communication style.</p>
    <p>You will be presented with 40 pairs of statements. For each pair, select the statement that best describes you.</p>
    <p>There are no right or wrong answers. Be spontaneous and honest!</p>
    <button id="start-btn">Start</button>
  `;

  document.getElementById("start-btn").onclick = () => {
    currentQuestionIndex = 0;
    selectedResponses = [];
    renderQuestion();
  };
}


