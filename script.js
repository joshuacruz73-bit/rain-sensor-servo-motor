const STORAGE_KEY = "karinderya-ni-andreng-save";

const story = [
  {
    id: "day1",
    day: "Day 1",
    title: "Himigs ng Paaralan at Bahay",
    narrative:
      "Nasa klase si Andreng sa TVL-ICT. Nagtatalakayan sila ni Sir Tris tungkol sa Entrepreneurship, at biglang may text si Mang Cruz na may problema sa bahay. Umuwi siya ng may kaba at nakita ang ama na nakaupo sa mesa, worried at halos mawalan ng pag-asa. 'Anak, broke na tayo at may utang,' sabi ng ama. Naramdaman ni Andreng ang bigat ng responsibilidad sa kanyang balikat.",
    choices: [
      {
        text: "Mag-aral nang mabuti at tulungan ang ama sa pag-iisip ng solusyon.",
        points: 20,
        next: "day2",
        good: true,
      },
      {
        text: "Maghanap ng shortcut at ipilit ang mabilisang kita kahit risky.",
        points: 15,
        next: "day2",
        good: false,
      },
    ],
  },
  {
    id: "day2",
    day: "Day 2",
    title: "Ang Tulong ni Anyapot",
    narrative:
      "Dumating ang tawag ni Anyapot. Nalaman niya ang problema ni Andreng dahil sa kwento ng kanyang ina, si Angeline. Nag-alok siya ng tulong at binigay ang ₱10,000 para sa pamilya. Pero habang nag-iisip si Andreng ng paraan, naakit siya sa sugal at hindi niya nalaman na unti-unti na itong naglalaho sa kanyang mga kamay.",
    choices: [
      {
        text: "Ipagkatiwala ang pera sa mas matalinong negosyo, hindi sa sugal.",
        points: 22,
        next: "day3",
        good: true,
      },
      {
        text: "Maglaro ng sabong at ipagsapalaran ang lahat.",
        points: 18,
        next: "day3",
        good: false,
      },
    ],
  },
  {
    id: "day3",
    day: "Day 3",
    title: "Pagkahulog sa Kalsada",
    narrative:
      "Nawala ang pera. Isang araw, nakita si Andreng sa kalsada, basa sa ulan, umiiyak at halos nakalimutan ang sarili. Nagbalik ang alaala ng pagkatalo at ng mga maling desisyon. Anyapot ang tumawag at nakita siya na nakahiga sa gilid ng daan, umiiyak at humihingi ng tawad. 'Nakontra ko ang tiwala mo,' sabi ni Andreng. Pero si Anyapot ay hindi sumuko sa kanya.",
    choices: [
      {
        text: "Humingi ng tawad, aminin ang pagkakamali, at magpursige ulit.",
        points: 25,
        next: "day4",
        good: true,
      },
      {
        text: "Itago ang totoo at magtago sa hiya hanggang mawala ang problema.",
        points: 15,
        next: "day4",
        good: false,
      },
    ],
  },
  {
    id: "day4",
    day: "Day 4",
    title: "FoodLoop at ang Simula ng Karinderya",
    narrative:
      "Hindi nagpatinag si Anyapot. Binigyan niya ulit si Andreng ng ₱20,000 at kasama ng ama, sinimulan nila ang karinderya sa bahay. Nagsimula silang magtayo ng FoodLoop. Puno ng pag-asa ang bawat piraso ng ulam at bawat kutsara. 'Para sa pamilya, kailangan maging matatag tayo,' sabi ni Mang Cruz habang nagluluto si Andreng.",
    choices: [
      {
        text: "Gumawa ng flexible menu at magtrabaho nang masipag sa araw-araw.",
        points: 21,
        next: "day17",
        good: true,
      },
      {
        text: "Magmadali at ipagbili ang mga pagkain na may mababang kalidad.",
        points: 17,
        next: "day17",
        good: false,
      },
    ],
  },
  {
    id: "day17",
    day: "Day 17",
    title: "Pangalawang Hamon",
    narrative:
      "Unti-unti nang umunlad ang karinderya. Pero biglang may limang dating kaibigan ang bumisita sa FoodLoop: si Carlong, Franko, at Hirkuliys, kasama ang ilang dating kaklase na nagbahagi ng sama-samang pagkakaibigan. Hindi kasama si Anyapot. Nakita nila ang pagbubukas ng negosyo ni Andreng at sinimulan nilang siraan ang lugar sa pamamagitan ng pag-egg. Nawala ang katahimikan at ang bahay ay napuno ng away at hiya.",
    choices: [
      {
        text: "Humingi ng tulong kay Angeline at sa mga kaibigan para ayusin ang bahay.",
        points: 24,
        next: "day92",
        good: true,
      },
      {
        text: "Magdilim ang loob, iwasan ang problema, at hayaan na lang magdusa ang bahay.",
        points: 16,
        next: "day92",
        good: false,
      },
    ],
  },
  {
    id: "day92",
    day: "Day 92",
    title: "Katotohanan ni Angeline",
    narrative:
      "Nang makita ni Anyapot ang larawan ng bahay, kaagad siyang pumunta kay Angeline. Nagulat si Angeline nang makita ang bahay ngunit mas lalo siyang natakot nang nalaman niya na si Andreng ay ang anak niya sa dating asawa. Pinag-usapan nila ang katotohanan. Sa kasamaang palad, ang dating problema ay naging simula ng bagong pagkakaibigan at pag-ibig sa pamilya.",
    choices: [
      {
        text: "Tiisin ang hirap, magpatawad, at sabayan ang pamilya sa pagbangon.",
        points: 25,
        next: "finale",
        good: true,
      },
      {
        text: "Magpupuyat sa galit at magpanggap na wala nang pag-asa.",
        points: 15,
        next: "finale",
        good: false,
      },
    ],
  },
  {
    id: "finale",
    day: "Day 365",
    title: "Ang Busilak na Pagtulong",
    narrative:
      "Mga taon ang lumipas. Nagbago na ang takbo ng buhay ni Andreng. Tumaas ang reputasyon ng FoodLoop at naging tanyag ang karinderya bilang isang lugar ng masarap na pagkain at mabait na serbisyo. Sa kabila ng lahat, nakita pa rin niya ang tatlong dating kaibigan niya na nakaupo sa sidewalk—si Carlong, Franko, at Hirkuliys, nakalugmok at walang bahay. Lumapit si Andreng at sinabi: 'Be a buddy, not a bully. Magkakaroon ka ng pag-asa kung magsisimula kang tumulong.'",
    choices: [
      {
        text: "Tulungan sila at ibahagi ang aral ng buhay.",
        points: 25,
        next: "ending",
        good: true,
      },
      {
        text: "Iwan silang mag-isa at hindi na sila pakialaman.",
        points: 15,
        next: "ending",
        good: false,
      },
    ],
  },
];

const state = {
  currentPlayer: null,
  sceneIndex: 0,
  dayStartTime: 300,
  timeLeft: 300,
  points: 0,
  totalSecondsPlayed: 0,
  keys: 0,
  hasSeenSecret: false,
  ended: false,
  goodKarma: 0,
  timerId: null,
};

const screens = {
  menu: document.getElementById("menu-screen"),
  signin: document.getElementById("signin-screen"),
  game: document.getElementById("game-screen"),
  board: document.getElementById("board-screen"),
  ending: document.getElementById("ending-screen"),
  secret: document.getElementById("secret-scene"),
};

const els = {
  narration: document.getElementById("narration-box"),
  sceneBadge: document.getElementById("scene-badge"),
  sceneTitle: document.getElementById("scene-title"),
  choiceContainer: document.getElementById("choice-container"),
  playerName: document.getElementById("player-name"),
  dayDisplay: document.getElementById("day-display"),
  pointsDisplay: document.getElementById("points-display"),
  timerDisplay: document.getElementById("timer-display"),
  keysDisplay: document.getElementById("keys-display"),
  longestList: document.getElementById("longest-list"),
  pointsList: document.getElementById("points-list"),
  boardMessage: document.getElementById("board-message"),
  endingTitle: document.getElementById("ending-title"),
  endingText: document.getElementById("ending-text"),
};

function showScreen(name) {
  Object.entries(screens).forEach(([screenName, screen]) => {
    screen.classList.toggle("active", screenName === name);
  });
}

function loadPlayers() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function savePlayers(players) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

function getPlayerIndexByLrn(lrn) {
  const players = loadPlayers();
  return players.findIndex((player) => player.lrn === lrn);
}

function upsertPlayer(player) {
  const players = loadPlayers();
  const index = players.findIndex((entry) => entry.lrn === player.lrn);

  if (index >= 0) {
    players[index] = { ...players[index], ...player };
  } else {
    players.push(player);
  }

  savePlayers(players);
}

function renderLeaderboard() {
  const players = loadPlayers();

  const longest = [...players]
    .sort((a, b) => (b.longestPlayed || 0) - (a.longestPlayed || 0))
    .slice(0, 10);

  const topPoints = [...players]
    .sort((a, b) => (b.points || 0) - (a.points || 0))
    .slice(0, 10);

  els.longestList.innerHTML = longest.length
    ? longest
        .map(
          (player, index) =>
            `<li>${index + 1}. ${player.name || "Player"} - ${formatSeconds(player.longestPlayed || 0)}</li>`
        )
        .join("")
    : "<li>Wala pang manlalaro.</li>";

  els.pointsList.innerHTML = topPoints.length
    ? topPoints
        .map(
          (player, index) => `<li>${index + 1}. ${player.name || "Player"} - ${player.points || 0} pts</li>`
        )
        .join("")
    : "<li>Wala pang mataas na puntos.</li>";
}

function formatSeconds(value) {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function showMenu() {
  showScreen("menu");
  renderLeaderboard();
}

function showSignin() {
  showScreen("signin");
}

function getCurrentPlayerProfile() {
  return state.currentPlayer || {
    name: "Guest",
    lrn: "guest",
    points: 0,
    longestPlayed: 0,
    keys: 0,
  };
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    if (state.timeLeft > 0) {
      state.timeLeft -= 1;
      state.totalSecondsPlayed += 1;
      const display = `${String(Math.floor(state.timeLeft / 60)).padStart(2, "0")}:${String(
        state.timeLeft % 60
      ).padStart(2, "0")}`;
      els.timerDisplay.textContent = display;

      if (state.currentPlayer) {
        state.currentPlayer.longestPlayed = Math.max(
          state.currentPlayer.longestPlayed || 0,
          state.totalSecondsPlayed
        );
      }
    } else {
      clearInterval(state.timerId);
      completeDayWithDefaultDecision();
    }
  }, 1000);
}

function completeDayWithDefaultDecision() {
  const scene = story[state.sceneIndex];
  if (!scene) return;

  const safeChoice = scene.choices.find((choice) => choice.good) || scene.choices[0];
  applyChoice(safeChoice);
}

function updateHUD() {
  const player = getCurrentPlayerProfile();
  els.playerName.textContent = player.name || "Guest";
  els.dayDisplay.textContent = story[state.sceneIndex]?.day || "Day 1";
  els.pointsDisplay.textContent = String(state.points);
  els.keysDisplay.textContent = String(state.keys);
  els.timerDisplay.textContent = formatSeconds(state.timeLeft);
}

function renderScene() {
  if (state.sceneIndex >= story.length) {
    return;
  }

  const scene = story[state.sceneIndex];
  const currentPlayer = getCurrentPlayerProfile();

  els.sceneBadge.textContent = scene.day;
  els.sceneTitle.textContent = scene.title;
  els.narration.textContent = scene.narrative;
  els.choiceContainer.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = `${choice.text} (+${choice.points} pts)`;
    button.addEventListener("click", () => applyChoice(choice));
    els.choiceContainer.appendChild(button);
  });

  els.dayDisplay.textContent = scene.day;
  els.playerName.textContent = currentPlayer.name;
  updateHUD();
}

function applyChoice(choice) {
  if (state.ended) return;

  state.points += Number(choice.points || 0);
  if (choice.good) {
    state.goodKarma += 1;
  }

  if (state.sceneIndex < story.length - 1) {
    state.sceneIndex += 1;
    state.timeLeft = 300;
    const currentPlayer = getCurrentPlayerProfile();

    if (state.currentPlayer) {
      state.currentPlayer.points = state.points;
      state.currentPlayer.longestPlayed = Math.max(
        state.currentPlayer.longestPlayed || 0,
        state.totalSecondsPlayed
      );
      upsertPlayer(state.currentPlayer);
    }

    renderScene();
    startTimer();
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(state.timerId);
  state.ended = true;

  if (state.currentPlayer) {
    state.currentPlayer.points = state.points;
    state.currentPlayer.longestPlayed = Math.max(
      state.currentPlayer.longestPlayed || 0,
      state.totalSecondsPlayed
    );
    upsertPlayer(state.currentPlayer);
  }

  const isGoodEnding = state.goodKarma >= 4 || state.points >= 140;

  if (isGoodEnding) {
    els.endingTitle.textContent = "Good Ending: Ang Iyong Pagsusumikap ay Nakita ng Mundo";
    els.endingText.textContent =
      "Naging matagumpay si Andreng at napatunayan niya na ang tiyaga, katapatan, at pagmamahal sa pamilya ay higit pa sa pera. Sa tulong ni Angeline, ni Anyapot, at ng kanyang ama, nanatiling matatag ang FoodLoop at naging inspirasyon siya sa marami. Hindi lang siya nakabangon, kundi nakatulong din sa iba. 'Be a buddy, not a bully' ang kanyang tatak sa puso ng lahat.";
  } else {
    els.endingTitle.textContent = "Bad Ending: Ang Maling Desisyon ay Dapat Bayaran";
    els.endingText.textContent =
      "Sa kabila ng mga pagsubok, ang kanyang mga maling desisyon ay nagdulot ng pagkasira sa tiwala at sa negosyo. Kumikilos man siya sa takot, natuto rin siya na ang kapangyarihan ng pera ay hindi sapat kung kulang ang disiplina at katapatan. Ang kanyang kwento ay isang paalala na ang bawat desisyon ay may epekto sa hinaharap.";
  }

  if (state.currentPlayer) {
    state.currentPlayer.keys = Math.min(3, Math.floor(state.points / 80));
    state.keys = state.currentPlayer.keys;
    upsertPlayer(state.currentPlayer);
  }

  showScreen("ending");
  renderLeaderboard();
}

function beginGame() {
  if (!state.currentPlayer) {
    alert("Mag-sign in muna bago maglaro.");
    showSignin();
    return;
  }

  state.sceneIndex = 0;
  state.points = 0;
  state.goodKarma = 0;
  state.timeLeft = 300;
  state.totalSecondsPlayed = 0;
  state.ended = false;
  state.keys = state.currentPlayer.keys || 0;

  renderScene();
  startTimer();
  showScreen("game");
}

function convertPointsToKey() {
  if (!state.currentPlayer) {
    els.boardMessage.textContent = "Mag-sign in muna para i-convert ang points.";
    return;
  }

  const currentPlayer = state.currentPlayer;
  const pointsAvailable = currentPlayer.points || state.points || 0;

  if (pointsAvailable >= 80) {
    const earnedKeys = Math.floor(pointsAvailable / 80);
    currentPlayer.keys = (currentPlayer.keys || 0) + earnedKeys;
    currentPlayer.points = Math.max(0, pointsAvailable - earnedKeys * 80);
    state.keys = currentPlayer.keys;
    upsertPlayer(currentPlayer);
    els.boardMessage.textContent = `Nakakuha ka ng ${earnedKeys} key! Puntos mo ay na-convert na.`;
  } else {
    els.boardMessage.textContent = "Kulang pa ang points mo para makakuha ng key.";
  }

  renderLeaderboard();
  updateHUD();
}

function openSecretScene() {
  if (!state.currentPlayer) {
    els.boardMessage.textContent = "Mag-sign in muna para buksan ang secret cutscene.";
    return;
  }

  const keyCount = state.currentPlayer.keys || 0;
  if (keyCount <= 0) {
    els.boardMessage.textContent = "Kulang pa ang key mo. Mag-convert ng points para makuha ang secret cutscene.";
    return;
  }

  state.hasSeenSecret = true;
  showScreen("secret");
}

function handleSignIn(event) {
  event.preventDefault();
  const name = document.getElementById("student-name").value.trim();
  const lrn = document.getElementById("student-lrn").value.trim();

  if (!name || !lrn) {
    alert("Punan ang pangalan at LRN.");
    return;
  }

  const existing = loadPlayers().find((player) => player.lrn === lrn);
  state.currentPlayer = existing
    ? {
        ...existing,
        name,
      }
    : {
        name,
        lrn,
        points: 0,
        longestPlayed: 0,
        keys: 0,
      };

  upsertPlayer(state.currentPlayer);
  renderLeaderboard();
  showMenu();
  document.getElementById("signin-form").reset();
}

function bindEvents() {
  document.getElementById("signin-btn").addEventListener("click", showSignin);
  document.getElementById("play-btn").addEventListener("click", beginGame);
  document.getElementById("leaderboard-btn").addEventListener("click", () => {
    renderLeaderboard();
    showScreen("board");
  });
  document.getElementById("back-to-menu").addEventListener("click", showMenu);
  document.getElementById("board-back-btn").addEventListener("click", showMenu);
  document.getElementById("ending-back-btn").addEventListener("click", showMenu);
  document.getElementById("secret-back-btn").addEventListener("click", showMenu);
  document.getElementById("convert-points-btn").addEventListener("click", convertPointsToKey);
  document.getElementById("secret-scene-btn").addEventListener("click", openSecretScene);
  document.getElementById("signin-form").addEventListener("submit", handleSignIn);
}

bindEvents();
renderLeaderboard();
showMenu();
updateHUD();
