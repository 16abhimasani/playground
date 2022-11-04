use rand::prelude::*;
use rand::{ Rng, SeedableRng };

fn main() {
  println!("\n------RUST-PLAYGROUND------\n");
  play_rand();

  println!("\n------RUST-PLAYGROUND------\n");
  let mut rng = rand_chacha::ChaCha8Rng::seed_from_u64(10);
  println!("Random f32: {}", rng.gen::<f32>());
}

fn play_rand() {
  // We can use random() immediately. It can produce values of many common types:
  let x: u8 = random();
  println!("random(): {}", x);

  if random() {
    // generates a boolean
    println!("Heads!");
  }

  // If we want to be a bit more explicit (and a little more efficient) we can
  // make a handle to the thread-local generator:
  let mut rng = thread_rng();
  if rng.gen() {
    // random bool
    let x: f64 = rng.gen(); // random number in range [0, 1)
    let y = rng.gen_range(-10.0..10.0);
    println!("x is: {}", x);
    println!("y is: {}", y);
  }

  println!("Dice roll: {}", rng.gen_range(1..=6));
  println!("Number from 0 to 9: {}", rng.gen_range(0..10));

  // Sometimes it's useful to use distributions directly:
  let distr = rand::distributions::Uniform::new_inclusive(1, 100);
  let mut nums = [0i32; 3];
  for x in &mut nums {
    *x = rng.sample(distr);
  }
  println!("Some numbers: {:?}", nums);

  // We can also interact with iterators and slices:
  let arrows_iter = "➡⬈⬆⬉⬅⬋⬇⬊".chars();
  println!(
    "Lets go in this direction: {}",
    arrows_iter.choose(&mut rng).unwrap()
  );
  let mut nums = [1, 2, 3, 4, 5];
  nums.shuffle(&mut rng);
  println!("I shuffled my {:?}", nums);
}