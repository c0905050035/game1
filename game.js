// --- 遊戲資料與設定 ---
const CHARACTER_DATA = {
    // --- 初始角色與 1% / 0.01% 機率角色 ---
    "NOVICE": {
        id: "NOVICE", name: "新手冒險者", maxLevel: 10,
        baseStats: { hp: 100, atk: 10, mag: 10, def: 5, skill: 5, luck: 5 },
        statMultiplier: { hp: 1.0, atk: 1.0, mag: 1.0, def: 1.0, skill: 1.0, luck: 1.0 },
        skills: [{ name: "奮力一擊", type: "phys", multiplier: 1.5, baseChance: 0.1 }]
    },
    "VILLAGER": {
        id: "VILLAGER", name: "平凡村民", maxLevel: 15,
        baseStats: { hp: 80, atk: 5, mag: 5, def: 5, skill: 5, luck: 10 },
        statMultiplier: { hp: 1.0, atk: 0.8, mag: 0.8, def: 1.0, skill: 0.8, luck: 2.0 },
        skills: [{ name: "鋤頭攻擊", type: "phys", multiplier: 1.2, baseChance: 0.2 }]
    },
    "FARMER": {
        id: "FARMER", name: "勤勞農夫", maxLevel: 18,
        baseStats: { hp: 120, atk: 8, mag: 2, def: 8, skill: 6, luck: 6 },
        statMultiplier: { hp: 1.2, atk: 1.0, mag: 0.5, def: 1.2, skill: 1.0, luck: 1.0 },
        skills: [{ name: "大力出奇蹟", type: "phys", multiplier: 1.8, baseChance: 0.1 }]
    },
    "BLACKSMITH": {
        id: "BLACKSMITH", name: "鐵匠", maxLevel: 20,
        baseStats: { hp: 150, atk: 12, mag: 2, def: 15, skill: 8, luck: 5 },
        statMultiplier: { hp: 1.3, atk: 1.2, mag: 0.4, def: 1.5, skill: 1.0, luck: 1.0 },
        skills: [{ name: "火爐重鎚", type: "phys", multiplier: 2.0, baseChance: 0.15 }]
    },
    "SCHOLAR": {
        id: "SCHOLAR", name: "見習學者", maxLevel: 20,
        baseStats: { hp: 70, atk: 4, mag: 15, def: 4, skill: 10, luck: 10 },
        statMultiplier: { hp: 0.8, atk: 0.6, mag: 1.4, def: 0.8, skill: 1.5, luck: 1.5 },
        skills: [{ name: "知識就是力量", type: "mag", multiplier: 1.8, baseChance: 0.2 }]
    },
    "BARD": {
        id: "BARD", name: "吟遊詩人", maxLevel: 20,
        baseStats: { hp: 90, atk: 8, mag: 12, def: 6, skill: 12, luck: 20 },
        statMultiplier: { hp: 0.9, atk: 1.0, mag: 1.2, def: 0.8, skill: 1.2, luck: 2.5 },
        skills: [{ name: "安魂曲", type: "mag", multiplier: 1.5, baseChance: 0.3 }]
    },
    "ANCIENT_SOUL": {
        id: "ANCIENT_SOUL", name: "遠古魂靈", maxLevel: 28,
        baseStats: { hp: 300, atk: 30, mag: 30, def: 20, skill: 20, luck: 30 },
        statMultiplier: { hp: 2.0, atk: 2.0, mag: 2.0, def: 2.0, skill: 2.0, luck: 2.0 },
        skills: [
            { name: "遠古之光", type: "mixed", multiplier: 4.0, baseChance: 0.3 },
            { name: "靈魂震盪", type: "mag", multiplier: 3.5, baseChance: 0.2 },
            { name: "萬物復甦", type: "mixed", multiplier: 2.0, baseChance: 0.2 }
        ]
    },

    // --- 塔 10-100 層解鎖角色 (越來越強) ---
    "WARRIOR": {
        id: "WARRIOR", name: "狂戰士 (10F)", maxLevel: 15,
        baseStats: { hp: 200, atk: 25, mag: 2, def: 15, skill: 12, luck: 10 },
        statMultiplier: { hp: 1.3, atk: 1.6, mag: 0.4, def: 1.3, skill: 1.1, luck: 1.0 },
        skills: [
            { name: "嗜血狂殺", type: "phys", multiplier: 3.0, baseChance: 0.2 },
            { name: "旋風斬", type: "phys", multiplier: 2.0, baseChance: 0.15 }
        ]
    },
    "MAGE": {
        id: "MAGE", name: "大魔法師 (20F)", maxLevel: 20,
        baseStats: { hp: 120, atk: 5, mag: 40, def: 10, skill: 15, luck: 15 },
        statMultiplier: { hp: 0.9, atk: 0.5, mag: 2.0, def: 1.0, skill: 1.5, luck: 1.5 },
        skills: [
            { name: "極效奧術", type: "mag", multiplier: 3.5, baseChance: 0.2 },
            { name: "隕石術", type: "mag", multiplier: 4.5, baseChance: 0.1 }
        ]
    },
    "PALADIN": {
        id: "PALADIN", name: "聖騎士 (30F)", maxLevel: 21,
        baseStats: { hp: 300, atk: 30, mag: 15, def: 40, skill: 20, luck: 15 },
        statMultiplier: { hp: 1.5, atk: 1.4, mag: 1.0, def: 2.0, skill: 1.2, luck: 1.2 },
        skills: [
            { name: "神聖制裁", type: "phys", multiplier: 3.2, baseChance: 0.15 },
            { name: "聖光守護", type: "mixed", multiplier: 1.5, baseChance: 0.2 },
            { name: "正義之錘", type: "phys", multiplier: 2.5, baseChance: 0.15 }
        ]
    },
    "DRAGON_SLAYER": {
        id: "DRAGON_SLAYER", name: "屠龍者 (40F)", maxLevel: 25,
        baseStats: { hp: 400, atk: 60, mag: 10, def: 30, skill: 25, luck: 20 },
        statMultiplier: { hp: 1.6, atk: 2.2, mag: 0.8, def: 1.5, skill: 1.5, luck: 1.5 },
        skills: [
            { name: "真龍破", type: "phys", multiplier: 4.5, baseChance: 0.2 },
            { name: "龍火氣息", type: "mixed", multiplier: 3.8, baseChance: 0.15 },
            { name: "逆鱗擊", type: "phys", multiplier: 5.5, baseChance: 0.1 }
        ]
    },
    "HERO": {
        id: "HERO", name: "傳說勇者 (50F)", maxLevel: 25,
        baseStats: { hp: 500, atk: 50, mag: 50, def: 40, skill: 40, luck: 40 },
        statMultiplier: { hp: 1.8, atk: 1.8, mag: 1.8, def: 1.8, skill: 1.8, luck: 1.8 },
        skills: [
            { name: "勇者之魂", type: "mixed", multiplier: 5.0, baseChance: 0.2 },
            { name: "星辰隕落", type: "mag", multiplier: 5.5, baseChance: 0.15 },
            { name: "聖劍閃光", type: "phys", multiplier: 5.5, baseChance: 0.15 }
        ]
    },
    "VOID_WALKER": {
        id: "VOID_WALKER", name: "虛空行者 (60F)", maxLevel: 25,
        baseStats: { hp: 450, atk: 70, mag: 70, def: 35, skill: 50, luck: 50 },
        statMultiplier: { hp: 1.7, atk: 2.5, mag: 2.5, def: 1.5, skill: 2.0, luck: 2.0 },
        skills: [
            { name: "虛空崩滅", type: "mag", multiplier: 6.0, baseChance: 0.15 },
            { name: "次元切割", type: "phys", multiplier: 6.5, baseChance: 0.15 },
            { name: "時空囚牢", type: "mixed", multiplier: 7.0, baseChance: 0.1 }
        ]
    },
    "CELESTIAL": {
        id: "CELESTIAL", name: "天界聖靈 (70F)", maxLevel: 28,
        baseStats: { hp: 800, atk: 100, mag: 100, def: 80, skill: 80, luck: 80 },
        statMultiplier: { hp: 2.5, atk: 3.0, mag: 3.0, def: 2.5, skill: 2.5, luck: 2.5 },
        skills: [
            { name: "天界洗禮", type: "mixed", multiplier: 7.5, baseChance: 0.2 },
            { name: "諸神之光", type: "mag", multiplier: 8.0, baseChance: 0.15 },
            { name: "天使羽翼", type: "mixed", multiplier: 6.0, baseChance: 0.2 },
            { name: "審判之雷", type: "mag", multiplier: 9.0, baseChance: 0.1 }
        ]
    },
    "DEMON_LORD": {
        id: "DEMON_LORD", name: "深淵魔王 (80F)", maxLevel: 30,
        baseStats: { hp: 1200, atk: 150, mag: 150, def: 100, skill: 90, luck: 70 },
        statMultiplier: { hp: 3.0, atk: 4.0, mag: 4.0, def: 3.0, skill: 2.5, luck: 2.0 },
        skills: [
            { name: "絕望之握", type: "mag", multiplier: 10.0, baseChance: 0.1 },
            { name: "黑暗降臨", type: "mixed", multiplier: 9.0, baseChance: 0.15 },
            { name: "惡魔咆哮", type: "phys", multiplier: 8.5, baseChance: 0.2 },
            { name: "煉獄火焰", type: "mag", multiplier: 12.0, baseChance: 0.08 }
        ]
    },
    "GOD_SLAYER": {
        id: "GOD_SLAYER", name: "弒神者 (90F)", maxLevel: 30,
        baseStats: { hp: 2000, atk: 300, mag: 100, def: 200, skill: 150, luck: 150 },
        statMultiplier: { hp: 4.0, atk: 5.0, mag: 2.0, def: 4.0, skill: 3.0, luck: 3.0 },
        skills: [
            { name: "諸神黃昏", type: "phys", multiplier: 12.0, baseChance: 0.15 },
            { name: "弒神一擊", type: "phys", multiplier: 15.0, baseChance: 0.1 },
            { name: "崩天裂地", type: "mixed", multiplier: 10.0, baseChance: 0.2 },
            { name: "終焉之刃", type: "phys", multiplier: 20.0, baseChance: 0.05 }
        ]
    },
    "WORLD_CREATOR": {
        id: "WORLD_CREATOR", name: "創世神 (100F)", maxLevel: 20,
        baseStats: { hp: 5000, atk: 500, mag: 500, def: 400, skill: 300, luck: 300 },
        statMultiplier: { hp: 6.0, atk: 6.0, mag: 6.0, def: 6.0, skill: 6.0, luck: 6.0 },
        skills: [
            { name: "宇宙歸一", type: "mixed", multiplier: 20.0, baseChance: 0.2 },
            { name: "時空倒流", type: "mixed", multiplier: 15.0, baseChance: 0.15 },
            { name: "創世神光", type: "mag", multiplier: 25.0, baseChance: 0.1 },
            { name: "大爆炸", type: "mixed", multiplier: 30.0, baseChance: 0.05 }
        ]
    },

    // --- 終極作弊角色 ---
    "OAK_GOD": {
        id: "OAK_GOD", name: "大木神", maxLevel: 50,
        baseStats: { hp: 11111, atk: 1111, mag: 1111, def: 1111, skill: 1111, luck: 1111 },
        statMultiplier: { hp: 99, atk: 99, mag: 99, def: 99, skill: 99, luck: 99 },
        skills: [
            { name: "毀天滅地", type: "mixed", multiplier: 999.0, baseChance: 1.0 },
            { name: "大木的慈悲", type: "mixed", multiplier: 999.0, baseChance: 1.0 },
            { name: "大木的威嚴", type: "mixed", multiplier: 999.0, baseChance: 1.0 },
            { name: "大木的凝視", type: "mixed", multiplier: 999.0, baseChance: 1.0 }
        ]
    }
};

const BOSS_SKILLS = [
    { name: "深淵重擊", type: "phys", multiplier: 2.5, baseChance: 0.12 },
    { name: "末日審判", type: "mag", multiplier: 3.0, baseChance: 0.1 },
    { name: "靈魂侵蝕", type: "mixed", multiplier: 3.5, baseChance: 0.08 }
];

const ICONS = {
    'TRAIN': '⚔️',
    'STUDY': '📖',
    'PLAY_PC': '💻',
    'WALK': '🚶',
    'SLEEP': '🛏️'
};

// --- 核心類別 ---

class Player {
    constructor(characterId) {
        this.currentCharacterId = characterId;
        const charData = CHARACTER_DATA[characterId];
        this.stats = { ...charData.baseStats };
        this.level = 1;
        this.exp = 0;
        this.actionHistory = [];
        this.unlockedCharacters = [characterId];
        this.loseStreak = 0; // 連敗紀錄

        // 自由屬性點系統
        this.totalBonusPoints = 0; // 總共獲得的自由點數
        this.bonusPointsAllocation = { hp: 0, atk: 0, mag: 0, def: 0, skill: 0, luck: 0 };
    }

    getEffectiveStats() {
        const effective = { ...this.stats };
        for (let stat in this.bonusPointsAllocation) {
            const bonus = this.bonusPointsAllocation[stat];
            if (stat === 'hp') {
                effective[stat] += bonus * 10; // 血量 1 點 = 10 HP
            } else {
                effective[stat] += bonus; // 其他 1 點 = 1 屬性
            }
        }
        return effective;
    }

    allocatePoint(stat, op) {
        const currentAllocated = Object.values(this.bonusPointsAllocation).reduce((a, b) => a + b, 0);
        if (op === 'plus') {
            if (currentAllocated < this.totalBonusPoints) {
                this.bonusPointsAllocation[stat]++;
                return true;
            }
        } else if (op === 'minus') {
            if (this.bonusPointsAllocation[stat] > 0) {
                this.bonusPointsAllocation[stat]--;
                return true;
            }
        }
        return false;
    }

    gainExp(amount) {
        const charData = CHARACTER_DATA[this.currentCharacterId];
        const maxLevel = charData.maxLevel || 10;

        if (this.level >= maxLevel) {
            this.exp = 0;
            return false; // 達到上限不給經驗
        }

        this.exp += amount;
        let leveledUp = false;
        while (this.exp >= 100) {
            this.exp -= 100;
            this.level++;
            leveledUp = true;
            // 升級固定屬性獎勵
            this.stats.hp += 10;
            this.stats.atk += 2;
            this.stats.mag += 2;
            this.stats.def += 2;

            if (this.level >= maxLevel) {
                this.level = maxLevel;
                this.exp = 0;
                break;
            }
        }
        return leveledUp;
    }

    respawn(newCharId) {
        this.currentCharacterId = newCharId;
        const charData = CHARACTER_DATA[newCharId];
        // 重生時初始化屬性
        this.stats = { ...charData.baseStats };
        this.level = 1;
        this.exp = 0;
        this.actionHistory = [];
        this.loseStreak = 0;
    }

    switchCharacter(charId) {
        if (!this.unlockedCharacters.includes(charId)) return false;
        this.currentCharacterId = charId;
        // 繼承目前數值，但也可以設計為切換時套用新的基礎值，這裡採用直接切換Multiplier的設計
        return true;
    }
}

class ActionSystem {
    static ACTION_WEIGHTS = {
        'TRAIN': { atk: 2, skill: 1 },
        'STUDY': { mag: 2, skill: 1 },
        'PLAY_PC': { mag: 1, luck: 2 },
        'WALK': { luck: 2, skill: 1 },
        'SLEEP': { hp: 10, def: 2 }
    };

    static performAction(player, actionType) {
        player.actionHistory.push(actionType);
        const leveledUp = player.gainExp(20);

        let bonusMsg = null;
        if (player.actionHistory.length >= 5) {
            const charData = CHARACTER_DATA[player.currentCharacterId];
            const maxLevel = charData.maxLevel || 10;

            if (player.level < maxLevel) {
                bonusMsg = this.applyBonusStats(player);
            } else {
                bonusMsg = "已達等級上限，無法再獲得屬性成長。";
            }
            player.actionHistory = [];
        }

        const newCharId = this.rollForRandomCharacter(player);
        return { leveledUp, bonusMsg, newCharId };
    }

    static applyBonusStats(player) {
        const totalBasePoints = 10 + (player.level * 2);
        const weightSum = { hp: 0, atk: 0, mag: 0, def: 0, skill: 0, luck: 0 };

        player.actionHistory.forEach(action => {
            const weights = this.ACTION_WEIGHTS[action];
            for (let stat in weights) {
                weightSum[stat] += weights[stat];
            }
        });

        const totalWeight = Object.values(weightSum).reduce((a, b) => a + b, 0);
        const charData = CHARACTER_DATA[player.currentCharacterId];
        let gains = [];

        for (let stat in player.stats) {
            if (weightSum[stat] > 0) {
                const gained = (weightSum[stat] / totalWeight) * totalBasePoints;
                let finalGain = Math.round(gained * charData.statMultiplier[stat]);
                if (stat === 'hp') finalGain *= 5;

                if (finalGain > 0) {
                    player.stats[stat] += finalGain;
                    gains.push(`${this.translateStat(stat)} +${finalGain}`);
                }
            }
        }
        return `結算5次動作成長：${gains.join(', ')}`;
    }

    static translateStat(stat) {
        const map = { hp: '血量', atk: '攻擊', mag: '魔法', def: '防禦', skill: '技巧', luck: '幸運' };
        return map[stat] || stat;
    }

    static rollForRandomCharacter(player) {
        // 初始角色池 (1% 機率)
        const initialPool = ["VILLAGER", "FARMER", "BLACKSMITH", "SCHOLAR", "BARD"];
        if (Math.random() < 0.01) {
            const charId = initialPool[Math.floor(Math.random() * initialPool.length)];
            if (!player.unlockedCharacters.includes(charId)) {
                player.unlockedCharacters.push(charId);
                return charId;
            }
        }

        // 強大初始角色 (0.01% 機率)
        if (Math.random() < 0.0001) {
            const charId = "ANCIENT_SOUL";
            if (!player.unlockedCharacters.includes(charId)) {
                player.unlockedCharacters.push(charId);
                return charId;
            }
        }

        return null;
    }
}

class Boss {
    constructor(floor) {
        this.floor = floor;
        // 修正樓層等級：基礎 10 等，第 100 層為 30 等
        // 公式：10 + (floor / 100) * 20
        this.level = Math.floor(10 + (floor / 100) * 20);
        this.name = `第 ${floor} 層守衛者 (Lv.${this.level})`;

        const linear = 1 + (floor * 0.05);
        const exponential = Math.pow(1.02, floor);
        const milestoneBonus = (floor % 10 === 0) ? 1.5 : 1.0;
        const difficultyMultiplier = linear * exponential * milestoneBonus;

        // 隨機分配屬性預算
        const totalBudget = (18 + 15 + 12 + 12 + 8) * difficultyMultiplier;
        const stats = { atk: 0, mag: 0, def: 0, skill: 0, luck: 0 };
        const keys = Object.keys(stats);
        let remaining = totalBudget;

        keys.forEach(k => {
            const base = (totalBudget * 0.3) / 5;
            stats[k] = base;
            remaining -= base;
        });

        for (let i = 0; i < keys.length - 1; i++) {
            const share = Math.random() * remaining;
            stats[keys[i]] += share;
            remaining -= share;
        }
        stats[keys[keys.length - 1]] += remaining;
        for (let k in stats) stats[k] = Math.floor(stats[k]);

        this.stats = {
            hp: Math.floor(350 * difficultyMultiplier * 2),
            ...stats
        };

        // 基礎技能
        this.skills = [...BOSS_SKILLS];

        // 每 10 層追加強力技能
        const specializedSkills = [
            { name: "影之侵蝕", type: "phys", multiplier: 2.8, baseChance: 0.12 }, // 10F
            { name: "紅蓮地獄", type: "mag", multiplier: 3.5, baseChance: 0.1 },  // 20F
            { name: "極光處刑", type: "mag", multiplier: 4.0, baseChance: 0.1 },  // 30F
            { name: "萬雷天引", type: "mag", multiplier: 4.5, baseChance: 0.08 }, // 40F
            { name: "隕石撞擊", type: "phys", multiplier: 5.0, baseChance: 0.1 },  // 50F
            { name: "虛空放逐", type: "mixed", multiplier: 6.0, baseChance: 0.08 },// 60F
            { name: "聖光裁決", type: "mag", multiplier: 7.0, baseChance: 0.1 },  // 70F
            { name: "混沌風暴", type: "mixed", multiplier: 8.5, baseChance: 0.08 },// 80F
            { name: "神性崩解", type: "mag", multiplier: 12.0, baseChance: 0.05 },// 90F
            { name: "宇宙終結", type: "mixed", multiplier: 25.0, baseChance: 0.05 }// 100F
        ];

        const skillIdx = Math.floor(floor / 10) - 1;
        for (let i = 0; i <= skillIdx && i < specializedSkills.length; i++) {
            this.skills.push(specializedSkills[i]);
        }

        const rewards = {
            10: "WARRIOR", 20: "MAGE", 30: "PALADIN", 40: "DRAGON_SLAYER",
            50: "HERO", 60: "VOID_WALKER", 70: "CELESTIAL", 80: "DEMON_LORD",
            90: "GOD_SLAYER", 99: "WORLD_CREATOR"
        };
        this.rewardCharacter = rewards[floor] || null;
    }
}

class CombatSystem {
    static calculateHitRate(attackerSkill, defenderSkill) {
        const baseHitRate = 0.5;
        const skillFactor = attackerSkill / (attackerSkill + (defenderSkill * 0.5));
        return Math.max(0.20, Math.min(1.0, baseHitRate + (skillFactor - 0.5)));
    }

    static calculateDamage(attackerStats, defenderStats, skill = null) {
        let baseDamage = 0;
        let typeStr = "攻擊";

        if (skill) {
            typeStr = skill.name;
            if (skill.type === 'phys') {
                baseDamage = Math.max(1, attackerStats.atk * skill.multiplier - defenderStats.def);
            } else if (skill.type === 'mag') {
                baseDamage = Math.max(1, attackerStats.mag * skill.multiplier - Math.floor(defenderStats.def * 0.5));
            } else { // mixed /勇者專屬
                const physPart = attackerStats.atk * skill.multiplier * 0.6 - defenderStats.def;
                const magPart = attackerStats.mag * skill.multiplier * 0.6 - Math.floor(defenderStats.def * 0.5);
                baseDamage = Math.max(1, physPart) + Math.max(1, magPart);
            }
        } else {
            const physDamage = Math.max(1, attackerStats.atk - defenderStats.def);
            const magDamage = Math.max(1, attackerStats.mag - Math.floor(defenderStats.def * 0.5));
            baseDamage = Math.max(physDamage, magDamage);
        }

        const critRate = Math.min(0.5, attackerStats.luck / 100);
        const isCrit = Math.random() < critRate;

        // 加上一點浮動值 +- 10%
        const variance = 0.9 + (Math.random() * 0.2);

        return {
            damage: isCrit ? Math.floor(baseDamage * 1.5 * variance) : Math.floor(baseDamage * variance),
            isCrit: isCrit,
            skillName: skill ? skill.name : null
        };
    }

    static calculateCombo(attackerStats) {
        let comboCount = 0;
        // 連擊機率公式：(技巧 / 300) + (幸運 / 200)
        const comboChance = (attackerStats.skill / 300) + (attackerStats.luck / 200);
        // 上限 5 次連擊
        while (Math.random() < comboChance && comboCount < 5) {
            comboCount++;
        }
        return comboCount;
    }

    static simulateFight(player, boss, logCallback) {
        const playerStats = player.getEffectiveStats();
        let playerHp = playerStats.hp;
        let bossHp = boss.stats.hp;
        const charData = CHARACTER_DATA[player.currentCharacterId];

        let currentBossStats = { ...boss.stats };
        let playerDebuffs = { atk: 1, mag: 1, def: 1, skill: 1, luck: 1 };
        let isBerserk = false;
        let triggeredTraits = new Set();

        for (let round = 1; round <= 150; round++) {
            // BOSS 陰險特性檢查 (血量比例觸發)
            const hpRatio = (bossHp / boss.stats.hp) * 100;

            if (hpRatio <= 80 && !triggeredTraits.has(80)) {
                triggeredTraits.add(80);
                if (Math.random() < 0.8) {
                    logCallback("【特性】BOSS 發動『衰弱迷霧』：玩家技巧與幸運下降 30%！", "lose");
                    playerDebuffs.skill *= 0.7;
                    playerDebuffs.luck *= 0.7;
                }
            }
            if (hpRatio <= 60 && !triggeredTraits.has(60)) {
                triggeredTraits.add(60);
                if (Math.random() < 0.8) {
                    const steal = Math.floor(playerHp * 0.15);
                    playerHp -= steal;
                    bossHp += steal;
                    logCallback(`【特性】BOSS 發動『生命吞噬』：吸取玩家 ${steal} 點生命！`, "lose");
                }
            }
            if (hpRatio <= 40 && !triggeredTraits.has(40)) {
                triggeredTraits.add(40);
                if (Math.random() < 0.8) {
                    logCallback("【特性】BOSS 發動『護甲粉碎』：玩家防禦力歸零！", "lose");
                    playerDebuffs.def = 0;
                }
            }
            if (hpRatio <= 30 && !triggeredTraits.has(30)) {
                triggeredTraits.add(30);
                if (Math.random() < 0.8) {
                    logCallback("【特性】BOSS 發動『時空扭曲』：BOSS 連擊率瘋狂提升！", "lose");
                    currentBossStats.skill *= 3;
                    currentBossStats.luck *= 3;
                }
            }
            if (hpRatio <= 20 && !triggeredTraits.has(20)) {
                triggeredTraits.add(20);
                if (Math.random() < 0.8) {
                    logCallback("【特性】BOSS 發動『絕境暴起』：BOSS 傷害翻倍！", "lose");
                    currentBossStats.atk *= 2;
                    currentBossStats.mag *= 2;
                }
            }

            // 第 100 回合狂暴
            if (round === 100 && !isBerserk) {
                isBerserk = true;
                logCallback("【警告】BOSS 進入狂暴狀態！全屬性提升 1000%！", "crit");
                for (let s in currentBossStats) {
                    if (s !== 'hp') currentBossStats[s] *= 11;
                }
            }

            // --- 玩家回合 ---
            const effectivePlayerStats = {
                atk: playerStats.atk * playerDebuffs.atk,
                mag: playerStats.mag * playerDebuffs.mag,
                def: playerStats.def * playerDebuffs.def,
                skill: playerStats.skill * playerDebuffs.skill,
                luck: playerStats.luck * playerDebuffs.luck
            };

            if (Math.random() < this.calculateHitRate(effectivePlayerStats.skill, currentBossStats.skill)) {
                let triggeredSkill = null;
                if (charData.skills) {
                    for (const s of charData.skills) {
                        const triggerChance = s.baseChance + (effectivePlayerStats.luck / 200);
                        if (Math.random() < triggerChance) {
                            triggeredSkill = s;
                            break;
                        }
                    }
                }

                let attack = this.calculateDamage(effectivePlayerStats, currentBossStats, triggeredSkill);

                if (triggeredSkill) {
                    bossHp -= attack.damage;
                    logCallback(`[回合${round}] 玩家使用技能【${attack.skillName}】造成 ${attack.damage} 傷害${attack.isCrit ? ' (爆擊!)' : ''}`, 'system');
                } else {
                    const comboCount = this.calculateCombo(effectivePlayerStats);
                    logCallback(`[回合${round}] 玩家發動 ${comboCount + 1} 連擊！`, 'combat');
                    for (let i = 0; i <= comboCount; i++) {
                        const bonus = 1 + (i * 0.2);
                        const hitDamage = Math.floor(attack.damage * bonus);
                        bossHp -= hitDamage;
                        logCallback(`   -> 第 ${i + 1} 擊：${hitDamage} 傷害`, 'combat');
                        if (bossHp <= 0) break;
                    }
                }
            } else {
                logCallback(`[回合${round}] 玩家攻擊未命中！`, 'combat');
            }

            if (bossHp <= 0) return { win: true, reward: boss.rewardCharacter };

            // --- Boss 回合 ---
            if (Math.random() < this.calculateHitRate(currentBossStats.skill, effectivePlayerStats.skill)) {
                let bossTriggeredSkill = null;
                if (boss.skills) {
                    for (const s of boss.skills) {
                        const triggerChance = s.baseChance + (currentBossStats.luck / 200);
                        if (Math.random() < triggerChance) {
                            bossTriggeredSkill = s;
                            break;
                        }
                    }
                }

                let attack = this.calculateDamage(currentBossStats, effectivePlayerStats, bossTriggeredSkill);

                if (bossTriggeredSkill) {
                    playerHp -= attack.damage;
                    logCallback(`[回合${round}] Boss 使用【${attack.skillName}】造成 ${attack.damage} 傷害`, 'lose');
                } else {
                    const comboCount = this.calculateCombo(currentBossStats);
                    logCallback(`[回合${round}] Boss 發動 ${comboCount + 1} 連擊！`, 'combat');
                    for (let i = 0; i <= comboCount; i++) {
                        const bonus = 1 + (i * 0.2);
                        const hitDamage = Math.floor(attack.damage * bonus);
                        playerHp -= hitDamage;
                        logCallback(`   -> 第 ${i + 1} 擊：${hitDamage} 傷害`, 'combat');
                        if (playerHp <= 0) break;
                    }
                }
            } else {
                logCallback(`[回合${round}] Boss 攻擊未命中！`, 'combat');
            }

            if (playerHp <= 0) return { win: false };
        }

        logCallback("戰鬥太過漫長，玩家被狂暴的 BOSS 撕碎了。", "lose");
        return { win: false };
    }
}

// --- UI 與遊戲管理器 ---

class GameManager {
    constructor() {
        this.player = new Player("NOVICE");
        this.currentFloor = 1;
        this.currentBoss = new Boss(this.currentFloor);
        this.isBattling = false;

        this.initDOM();
        this.bindEvents();
        this.loadGame(); // 嘗試讀取存檔
        this.updateUI();
        this.updateBossUI();
    }

    saveGame() {
        const gameState = {
            player: {
                currentCharacterId: this.player.currentCharacterId,
                stats: this.player.stats,
                level: this.player.level,
                exp: this.player.exp,
                actionHistory: this.player.actionHistory,
                unlockedCharacters: this.player.unlockedCharacters,
                totalBonusPoints: this.player.totalBonusPoints,
                bonusPointsAllocation: this.player.bonusPointsAllocation
            },
            currentFloor: this.currentFloor,
            unlockedFloor: this.unlockedFloor,
            bossWeaknessMap: this.bossWeaknessMap
        };
        localStorage.setItem('fantasyTowerSave', JSON.stringify(gameState));
    }

    loadGame() {
        const savedData = localStorage.getItem('fantasyTowerSave');
        if (savedData) {
            try {
                const gameState = JSON.parse(savedData);
                this.player.currentCharacterId = gameState.player.currentCharacterId;
                this.player.stats = gameState.player.stats;
                this.player.level = gameState.player.level;
                this.player.exp = gameState.player.exp;
                this.player.actionHistory = gameState.player.actionHistory;
                this.player.unlockedCharacters = gameState.player.unlockedCharacters;
                this.player.totalBonusPoints = gameState.player.totalBonusPoints || 0;
                this.player.bonusPointsAllocation = gameState.player.bonusPointsAllocation || { hp: 0, atk: 0, mag: 0, def: 0, skill: 0, luck: 0 };
                this.currentFloor = gameState.currentFloor || 1;
                this.unlockedFloor = gameState.unlockedFloor || 1;
                this.bossWeaknessMap = gameState.bossWeaknessMap || {};

                const weakness = this.bossWeaknessMap[this.currentFloor] || 0;
                this.currentBoss = new Boss(this.currentFloor, weakness);

                // 恢復 UI 軌跡
                this.dom.track.innerHTML = '';
                this.player.actionHistory.forEach(action => this.updateTrack(action));

                this.logMsg("成功讀取冒險進度。", "system");
                return true;
            } catch (e) {
                console.error("Failed to load game", e);
                return false;
            }
        }
        return false;
    }

    initDOM() {
        this.dom = {
            level: document.getElementById('player-level'),
            name: document.getElementById('player-name'),
            expBar: document.getElementById('exp-bar'),
            expText: document.getElementById('exp-text'),

            stats: {
                hp: document.getElementById('stat-hp'),
                atk: document.getElementById('stat-atk'),
                mag: document.getElementById('stat-mag'),
                def: document.getElementById('stat-def'),
                skill: document.getElementById('stat-skill'),
                luck: document.getElementById('stat-luck')
            },

            track: document.getElementById('history-track'),
            logContainer: document.getElementById('log-container'),

            bossName: document.getElementById('boss-name'),
            bossHp: document.getElementById('boss-hp'),
            bossAtk: document.getElementById('boss-atk'),
            bossDef: document.getElementById('boss-def'),
            currentFloor: document.getElementById('current-floor'),
            btnFight: document.getElementById('btn-fight'),

            modal: document.getElementById('unlock-modal'),
            unlockedCharName: document.getElementById('unlocked-char-name'),
            btnModalConfirm: document.getElementById('btn-modal-confirm'),
            btnModalCancel: document.getElementById('btn-modal-cancel'),

            // 角色清單相關
            charListModal: document.getElementById('char-list-modal'),
            charGrid: document.getElementById('char-grid'),
            btnOpenCharList: document.getElementById('btn-open-char-list'),
            btnCloseCharList: document.getElementById('btn-close-char-list'),

            // 自由點數 UI
            bonusPointsAvailable: document.getElementById('bonus-points-available'),

            // BOSS 控制 UI
            inputFloor: document.getElementById('input-floor'),
            bossWeakness: document.getElementById('boss-weakness'),
            btnReset: document.getElementById('btn-reset')
        };
        this.pendingCharUnlock = null;
    }

    bindEvents() {
        const actionBtns = document.querySelectorAll('.action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (this.isBattling) return;
                const action = btn.getAttribute('data-action');
                this.handleAction(action);
            });
        });

        this.dom.btnFight.addEventListener('click', () => {
            if (this.isBattling) return;
            this.startBattle();
        });

        this.dom.btnModalConfirm.addEventListener('click', () => {
            if (this.pendingCharUnlock) {
                this.player.switchCharacter(this.pendingCharUnlock);
                this.logMsg(`已切換至新角色：${CHARACTER_DATA[this.pendingCharUnlock].name}`, 'system');
                this.saveGame();
                this.updateUI();
            }
            this.closeModal();
        });

        this.dom.btnModalCancel.addEventListener('click', () => {
            this.closeModal();
        });

        // 角色清單事件
        this.dom.btnOpenCharList.addEventListener('click', () => {
            this.renderCharList();
            this.dom.charListModal.classList.add('active');
        });

        this.dom.btnCloseCharList.addEventListener('click', () => {
            this.dom.charListModal.classList.remove('active');
        });

        // 自由點數分配事件
        document.querySelectorAll('.btn-stat').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const stat = e.target.dataset.stat;
                const op = e.target.dataset.op;
                if (this.player.allocatePoint(stat, op)) {
                    this.updateUI();
                    this.saveGame();
                }
            });
        });

        // 樓層選擇事件
        this.dom.inputFloor.addEventListener('change', (e) => {
            let val = parseInt(e.target.value);
            if (val < 1) val = 1;
            if (val > this.unlockedFloor) val = this.unlockedFloor;
            e.target.value = val;
            this.currentFloor = val;
            this.currentBoss = new Boss(this.currentFloor, this.bossWeaknessMap[this.currentFloor] || 0);
            this.updateBossUI();
            this.saveGame();
        });

        // 重製遊戲
        this.dom.btnReset.addEventListener('click', () => {
            if (confirm("確定要重製所有遊戲進度嗎？這將無法復原！")) {
                localStorage.removeItem('fantasyTowerSave');
                location.reload();
            }
        });
    }

    handleAction(action) {
        // UI 動畫
        this.updateTrack(action);

        // 核心邏輯
        const result = ActionSystem.performAction(this.player, action);

        this.logMsg(`執行動作：${action}`, 'gain');
        if (result.leveledUp) {
            this.logMsg(`恭喜升級！當前等級 Lv.${this.player.level}`, 'system');
        }
        if (result.bonusMsg) {
            this.logMsg(result.bonusMsg, 'system');
            this.clearTrack();
        }
        if (result.newCharId) {
            this.showUnlockModal(result.newCharId);
        }

        this.updateUI();
        this.saveGame();
    }

    startBattle() {
        this.isBattling = true;
        this.dom.btnFight.disabled = true;
        this.dom.btnFight.textContent = "戰鬥中...";

        this.logMsg(`=== 挑戰第 ${this.currentFloor} 層 Boss ===`, 'system');

        // 使用 setTimeout 模擬異步感
        setTimeout(() => {
            const result = CombatSystem.simulateFight(this.player, this.currentBoss, (msg, type) => this.logMsg(msg, type));

            if (result.win) {
                this.logMsg(`戰鬥勝利！成功擊敗第 ${this.currentFloor} 層守衛者！`, 'win');
                if (result.reward && !this.player.unlockedCharacters.includes(result.reward)) {
                    this.player.unlockedCharacters.push(result.reward);
                    this.logMsg(`戰鬥勝利！擊敗了 ${this.currentBoss.name}！`, 'win');
                }

                if (this.currentFloor >= 100) {
                    this.logMsg("恭喜你！成功登頂無盡之塔 100 層！你已經成為了新的傳說！", "system");
                    alert("✨ 恭喜登頂！遊戲正式通關 ✨");
                    this.isBattling = false;
                    return;
                }

                this.currentFloor++;
                this.currentBoss = new Boss(this.currentFloor);
                this.updateBossUI();
                this.player.loseStreak = 0; // 重置連敗

                // 勝利獎勵
                this.player.totalBonusPoints++; // 獲得 1 點自由屬性
                this.logMsg("戰鬥勝利！獲得 1 點自由屬性點！", "gain");

                const expReward = 50 * this.currentFloor;
                this.logMsg(`獲得經驗值 ${expReward}`, 'gain');
                if (this.player.gainExp(expReward)) {
                    this.logMsg(`恭喜升級！當前等級 Lv.${this.player.level}`, 'system');
                }
                this.updateUI();
                this.saveGame();
            } else {
                const deadChar = CHARACTER_DATA[this.player.currentCharacterId].name;
                this.logMsg(`角色【${deadChar}】戰敗了，正在尋求重生...`, 'lose');

                // 強制切換重生 (不再移除角色)
                setTimeout(() => {
                    this.renderCharList();
                    this.dom.charListModal.classList.add('active');
                    this.dom.btnCloseCharList.style.display = 'none'; // 強制選擇
                }, 1000);
            }

            this.isBattling = false;
            this.dom.btnFight.disabled = false;
            this.dom.btnFight.textContent = "挑戰本層 BOSS";
        }, 500);
    }

    updateUI() {
        this.dom.level.textContent = `Lv. ${this.player.level}`;
        this.dom.name.textContent = CHARACTER_DATA[this.player.currentCharacterId].name;

        const expPercent = this.player.exp; // 剛好 max 100
        this.dom.expBar.style.width = `${expPercent}%`;
        this.dom.expText.textContent = `${this.player.exp} / 100`;

        // 更新自由點數 UI
        const allocated = Object.values(this.player.bonusPointsAllocation).reduce((a, b) => a + b, 0);
        this.dom.bonusPointsAvailable.textContent = this.player.totalBonusPoints - allocated;

        const effectiveStats = this.player.getEffectiveStats();
        for (let stat in effectiveStats) {
            if (this.dom.stats[stat]) {
                const oldVal = parseInt(this.dom.stats[stat].textContent);
                const newVal = effectiveStats[stat];
                if (oldVal !== newVal) {
                    this.dom.stats[stat].textContent = newVal;
                }
            }
        }
    }

    updateBossUI() {
        this.dom.inputFloor.value = this.currentFloor;
        this.dom.inputFloor.max = this.unlockedFloor;
        
        const weakness = this.bossWeaknessMap[this.currentFloor] || 0;
        this.dom.bossWeakness.textContent = `虛弱: ${weakness}%`;
        
        this.dom.bossName.textContent = this.currentBoss.name;
        this.dom.bossHp.textContent = this.currentBoss.stats.hp;
        this.dom.bossAtk.textContent = this.currentBoss.stats.atk;
        this.dom.bossDef.textContent = this.currentBoss.stats.def;
    }

    updateTrack(action) {
        const node = document.createElement('div');
        node.className = 'history-node';
        node.textContent = ICONS[action];
        this.dom.track.appendChild(node);
    }

    clearTrack() {
        // 等待動畫播放完畢後清除
        setTimeout(() => {
            this.dom.track.innerHTML = '';
        }, 500);
    }

    logMsg(msg, type = 'system') {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = msg;
        this.dom.logContainer.appendChild(entry);
        this.dom.logContainer.scrollTop = this.dom.logContainer.scrollHeight;
    }

    showUnlockModal(charId) {
        this.pendingCharUnlock = charId;
        this.dom.unlockedCharName.textContent = CHARACTER_DATA[charId].name;
        this.dom.modal.classList.add('active');
    }

    closeModal() {
        this.dom.modal.classList.remove('active');
        this.pendingCharUnlock = null;
    }

    renderCharList() {
        this.dom.charGrid.innerHTML = '';
        this.player.unlockedCharacters.forEach(charId => {
            const charData = CHARACTER_DATA[charId];
            const isCurrent = this.player.currentCharacterId === charId;

            const card = document.createElement('div');
            card.className = `char-card ${isCurrent ? 'current' : ''}`;
            card.innerHTML = `
                <div class="char-card-icon">👤</div>
                <div class="char-card-name">${charData.name}</div>
                <div class="char-card-lvl">上限: Lv.${charData.maxLevel}</div>
            `;

            card.addEventListener('click', () => {
                this.player.respawn(charId);
                this.logMsg(`角色重生：${charData.name}`, 'system');
                this.dom.charListModal.classList.remove('active');
                this.dom.btnCloseCharList.style.display = 'block'; // 恢復按鈕
                this.saveGame();
                this.updateUI();
            });

            this.dom.charGrid.appendChild(card);
        });
    }
}

// 啟動遊戲
window.onload = () => {
    window.game = new GameManager();
};
