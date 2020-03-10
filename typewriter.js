const sentence = 'hello there from lighthouse labs';

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 50);
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, i * 50);
  }
}
