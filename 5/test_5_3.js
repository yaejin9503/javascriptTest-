/**
 * 5-3 연속 부분수열 1
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 * 만약 N=8, M=6이고 수열이 다음과 같다면
 * 1 2 1 3 1 1 1 2 
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 * 
 * ▣ 입력설명
 * 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 
 * 수열의 원소값은 1,000을 넘지 않는 자연수이다.
 * 
 * ▣ 출력설명
 * 첫째 줄에 경우의 수를 출력한다.
 * 
 * ▣ 입력예제 1 
 * 8 6
 * 1 2 1 3 1 1 1 2
 * 
 * ▣ 출력예제 1
 * 3
 */

function mySolution(arr, num){ 
    let answer = 0; 
    //num === 6
    for(let i=0; i<arr.length;i++){ 
        let sum = arr[i]; 
        for(let j=i+1;j<arr.length; j++){ 
            sum += arr[j]; 
            if(num < sum) break; 
            else if(num === sum) answer++; 
        }
    }
    
    return answer; 
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2]; 
// console.log(mySolution(arr, 6))

//투포인트 알고리즘 
solution(6, arr); 


function solution(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        if(sum===m) answer++;
        while(sum>=m){
            sum-=arr[lt++];
            console.log(sum, rt, lt); 
            if(sum===m) answer++;       
        }
    }        
    return answer;
}
