let datas=[4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
let datas2=[5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]

let sum=0;
let sum2=0;

for (data of datas){
    sum+=data;
}
for (data2 of datas2){
    sum2+=data2;
}

console.log(`[`,Math.max(...datas),`, `,Math.min(...datas),`,`,sum/datas.length,`]`);
console.log(`[`,Math.max(...datas2),`, `,Math.min(...datas2),`,`,sum2/datas2.length,`]`);

