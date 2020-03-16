// scores: an array of integers that represent leaderboard scores
// alice: an array of integers that represent Alice's scores
function climbingLeaderboard(scores, alice) {
    // scores: an array of integers that represent leaderboard scores
    // alice: an array of integers that represent Alice's scores
    // [GOAL]: print out alice's rank, after each game
    // 1.) eliminate duplicate values in scores array (set)
    // 2.) look at current alice score, and compare with values in scores array
    // 3.) IF current score value in scores, is greater than alice score 
    // AND the next score in scores is less than alice score
    // 4.) push that index value into rankings array
    // 5.) return rankings array

    const rankings = []
    
    scores = [...new Set(scores)]

    for (let a = 0; a < alice.length; a++){
        for (let i = 0; i < scores.length; i++){
            if (scores[i] > alice[a] && (scores[i + 1] <= alice[a] || !scores[i + 1])) {
                rankings.push(i + 2)
            } else if (alice[a] > scores[0]) {
                rankings.push(1)
                break
            }
        }
    }

    return rankings
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))

// 6, 4, 2, 1