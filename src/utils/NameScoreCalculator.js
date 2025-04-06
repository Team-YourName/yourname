import names from "@/assets/yourname-mock-data.json";

export const keywords = {
    ATTRACTIVE: "ATTRACTIVE",       // 매력적인
    BEAUTIFUL: "BEAUTIFUL",         // 아름다운
    BEST: "BEST",                   // 최고의
    BRAVE: "BRAVE",                 // 용감한
    BRIGHT: "BRIGHT",               // 밝은, 똑똑한
    CHALLENGING: "CHALLENGING",     // 도전적인
    CHEERFUL: "CHEERFUL",           // 명랑한, 쾌활한
    COURAGEOUS: "COURAGEOUS",       // 용기 있는
    CREATIVE: "CREATIVE",           // 창의적인
    CUTE: "CUTE",                   // 귀여운
    DIGNIFIED: "DIGNIFIED",         // 위엄 있는, 품위 있는
    ELEGANT: "ELEGANT",             // 우아한
    ENERGETIC: "ENERGETIC",         // 에너지가 넘치는
    HAPPY: "HAPPY",                 // 행복한
    INTELLIGENT: "INTELLIGENT",     // 지적인, 똑똑한
    KIND: "KIND",                   // 친절한
    LUCKY: "LUCKY",                 // 운이 좋은
    MASCULINE: "MASCULINE",         // 남성적인
    MATURE: "MATURE",               // 성숙한
    MYSTERIOUS: "MYSTERIOUS",       // 신비로운
    NATURAL: "NATURAL",             // 자연스러운
    PEACEFUL: "PEACEFUL",           // 평화로운
    RELIGIOUS: "RELIGIOUS",         // 종교적인
    ROYAL: "ROYAL",                 // 왕족의, 고귀한
    STRONG: "STRONG",               // 강한
    STYLISH: "STYLISH",             // 세련된, 멋진
    TRADITIONAL: "TRADITIONAL",     // 전통적인
    TRUTHFUL: "TRUTHFUL",           // 진실한, 정직한
    WARM: "WARM",                   // 따뜻한
    WEALTHY: "WEALTHY",             // 부유한
};

export const meaningTags = {
    '도전적인' : { 
        [keywords.CHALLENGING] : 60,
        [keywords.BRAVE]: 50, 
        [keywords.CREATIVE]: 40 
    },
    '우아한' : { 
        [keywords.ELEGANT] : 60,
        [keywords.WARM]: 50, 
        [keywords.MATURE]: 40, 
        [keywords.TRADITIONAL]: 30, 
        [keywords.RELIGIOUS]: 20 
    }, 
    '창의적인' : {
        [keywords.CREATIVE]: 60,
        [keywords.INTELLIGENT]: 50 
    },
    '따뜻한' : {
        [keywords.WARM]: 60,
        [keywords.KIND]: 50,
        [keywords.PEACEFUL]: 40,
        [keywords.RELIGIOUS]: 30,
    }, 
    '용감한' : {
        [keywords.BRAVE]: 60,
        [keywords.MASCULINE]: 50,
    }, 
    '매력적인' : {
        [keywords.ATTRACTIVE]: 60,
        [keywords.BEAUTIFUL]: 50,
        [keywords.CUTE]: 40,
    }, 
    '품위있는' : {
        [keywords.DIGNIFIED]: 60,
        [keywords.ROYAL]: 50,
        [keywords.WEALTHY]: 40,
        [keywords.TRADITIONAL]: 30,
        [keywords.MATURE]: 20,
    }, 
    '신비로운' : {
        [keywords.MYSTERIOUS]: 60,
        [keywords.RELIGIOUS]: 50,
    }, 
    '밝은' : {
        [keywords.BRIGHT]: 60,
        [keywords.CHEERFUL]: 50,
        [keywords.CUTE]: 40,
    }, 
    '진실된' : {
        [keywords.TRUTHFUL]: 60,
        [keywords.RELIGIOUS]: 50,
        [keywords.TRADITIONAL]: 40,
    },
    '멋진' : {
        [keywords.STYLISH]: 60,
        [keywords.MATURE]: 50,
        [keywords.BEST]: 40,
        [keywords.BRAVE]: 30,
        [keywords.INTELLIGENT]: 20,
        [keywords.MASCULINE]: 10,
    },
    '강인한' : { 
        [keywords.STRONG]: 60,
        [keywords.BRAVE]: 50, 
        [keywords.INTELLIGENT]: 40, 
        [keywords.MASCULINE]: 30 
    }, 
    '똑똑한' : {
        [keywords.INTELLIGENT]: 60,
        [keywords.MATURE]: 50,
    },
    '자연스러운' : {
        [keywords.NATURAL]: 60,
        [keywords.MYSTERIOUS]: 50,
    }, 
    '행복한' : {
        [keywords.HAPPY]: 60,
        [keywords.LUCKY]: 50,
        [keywords.CHEERFUL]: 40,
    }
};

export const mbtiTags = {
    'ISTP' : {
        [keywords.BRAVE]: 30,
    },
    'INTP' : {
        [keywords.STYLISH]: 30,
    },
    'ISFP' : {
        [keywords.ELEGANT]: 30,
        [keywords.NATURAL]: 30,
    },
    'INFP' : {
        [keywords.CREATIVE]: 30,
    },
    'ISTJ' : {
        [keywords.TRUTHFUL]: 30,
        [keywords.STRONG]: 30,
    },
    'INTJ' : {
        [keywords.DIGNIFIED]: 30,
        [keywords.INTELLIGENT]: 30,
    },
    'ISFJ' : {
        [keywords.WARM]: 30,
    },
    'INFJ' : {
        [keywords.ELEGANT]: 30,
        [keywords.DIGNIFIED]: 30,
        [keywords.TRUTHFUL]: 30,
    },
    'ESTP' : {
        [keywords.CHALLENGING]: 30,
        [keywords.STYLISH]: 30,  
    },
    'ENTP' : {
        [keywords.CHALLENGING]: 30,
        [keywords.INTELLIGENT]: 30,
    },
    'ESFP' : {
        [keywords.ATTRACTIVE]: 30,
        [keywords.BRIGHT]: 30,
        [keywords.NATURAL]: 30,
        [keywords.HAPPY]: 30,
    },
    'ENFP' : {
        [keywords.CREATIVE]: 30,
        [keywords.BRIGHT]: 30,
        [keywords.HAPPY]: 30,
    },
    'ESTJ' : {
        [keywords.STRONG]: 30,
    },
    'ENTJ' : {
        [keywords.BRAVE]: 30,
    },
    'ESFJ' : {
        [keywords.WARM]: 30,
    },
    'ENFJ' : {
        [keywords.ATTRACTIVE]: 30,
    },
}

export function calculateScore(gender, trend, meaning, mbti) {
    const genderFilteredNames = names.filter((name) => name.gender === (gender === 'male' ? 'M' : 'F'));
    const trendFilteredNames = genderFilteredNames.filter((name) => name.trend === trend.toUpperCase());
    const scoredNames = trendFilteredNames.map((name)=> {
        let score = 0;

        if (meaning && meaningTags[meaning]) {
            const meaningScores = meaningTags[meaning];
            for (const keyword of Object.keys(meaningScores)) {
                // category 대신 keyword 쓰기
                if (name.category.includes(keyword)) {
                    score += meaningScores[keyword];
                }
            }
        }

        if (mbti && mbtiTags[mbti]) {
            const mbtiScores = mbtiTags[mbti];
            for (const keyword of Object.keys(mbtiScores)) {
                if (name.category.includes(keyword)) {
                score += mbtiScores[keyword];
                }
            }
        }
        return { ...name, score };
    });
    
    scoredNames.sort((a, b) => b.score - a.score);

    return scoredNames.slice(0, 5);
}