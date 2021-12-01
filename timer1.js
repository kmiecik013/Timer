
const timer = function() {

const args = process.argv.slice(2);


for (let i = 0; i < args.length; i++) {

  if (args[i] < 0 || undefined || isNaN(args[i])) {
   
  }else {
  setTimeout(() => {
  process.stdout.write('BANG')
}, args[i]*1000);
};
} 
}
timer([3,5,6]);




//process.stdout.write('BANG');

