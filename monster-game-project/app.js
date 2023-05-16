const randomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: null,
      logs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    specialAtk() {
      return this.round % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = null;
      this.logs = [];
    },
    attackMonster() {
      this.round++;
      const attackValue = Math.floor(randomValue(3, 10));
      this.monsterHealth -= attackValue;
      this.addLogs("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(randomValue(5, 12));
      this.playerHealth -= attackValue;
      this.addLogs("monster", "attack", attackValue);
    },
    specialAtkMonster() {
      this.round++;
      const attackValue = Math.floor(randomValue(10, 25));
      this.monsterHealth -= attackValue;
      this.addLogs("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    heal() {
      this.round++;
      const healValue = Math.floor(randomValue(8, 20));
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogs("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.playerHealth = 0;
      this.winner = "monster";
    },
    addLogs(who, what, value, round) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
        actionRound: this.round,
      });
    },
  },
});

app.mount("#game");
