const rp = require('request-promise');

// const options = {
//   method: 'POST',
//   body: {
//     content: 'content',
//     title: 'title',
//   },
//   uri: 'http://localhost:8088/_store',
//   json: true,
// };

// const f = () => {
//   return rp(options).then(e => console.log(e)).catch(e => console.log(e));
// }
// console.log('????????');
// f();

const seedData = [{
  content: 'Ingredients\n1 tbsp rapeseed oil\n\n1 red pepper, deseeded and diced\n150g wholemeal spaghetti\n2 courgettes (250g), grated\n2 garlic cloves, finely grated\n1 lemon\n\nzested and juiced\n15g basil\n\nfinely chopped\n25g pine nuts, toasted\n2 tbsp finely grated parmesan\n\n or vegetarian alternative (optional)\nMethod\nHeat the oil in a large non-stick frying pan. Add the pepper and cook for 5 mins. Meanwhile, cook the pasta for 10-12 mins until tender.\n\nAdd the courgette and garlic to the pepper and cook, stirring very frequently, for 10-15 mins until the courgette is really soft.\n\nStir in the lemon zest and juice, basil and spaghetti (reserve some pasta water) and toss together, adding a little of the pasta water until nicely coated. Add the pine nuts, then spoon into bowls and serve topped with the parmesan, if using.',
  title: 'Pepper & lemon spaghetti with basil & pine nuts',
},
{
  content: '500g lean pork mince (5% fat)\n100g coarsely grated courgette\n\nsqueezed of excess juice\n1 onion\n\ngrated\n4 tbsp chopped fresh dill\n2 garlic cloves, finely grated\n1 egg\n\n1 tbsp rapeseed oil\n\n1 tsp thyme leaves\n2 tsp vegetable bouillon powder, made up to 300ml with boiling water\n2 tbsp half-fat crème fraîche\nFor the salad\n1 large apple\n\nchopped\n1 red onion, halved and thinly sliced\n4 tbsp chopped parsley\n\n2 tsp capers\n\n lemon\n\n, juiced\n320g cooked beetroot\n\n, cut into strips\nMethod\nTo make the meatballs, tip the pork into a bowl and add the grated courgette and onion, half the dill, half the garlic and plenty of black pepper. Break in the egg and mix well with your hands. When everything is well combined, break off walnut-size pieces and roll into balls – you should end up with about 28. The mixture will be very soft.\n\nHeat the oil in a large non-stick frying pan then gently fry the meatballs in two batches until firm and pale golden, turning them every now and then so they brown evenly. Each batch should take 6-8 mins.\n\nWipe out the pan to remove excess fat and add the remaining garlic and thyme, then pour in the bouillon and bring to the boil. Turn off the heat, stir in the crème fraîche and remaining dill, then return the meatballs to the pan and turn them in the mixture until coated.\n\nFor the salad, mix the apple, onion, parsley and capers with the lemon, then stir through the beetroot. Serve the salad alongside the meatballs. If you’re cooking for two people, eat half the meatballs and salad now, and chill the rest for another day – it will keep in the fridge for up to three days. Reheat the meatballs in the microwave until piping hot.',
  title: 'Swedish meatballs with beetroot & apple salad',
},
{
  content: '2 tsp white miso\n tbsp rice wine vinegar\n tsp honey\n\n1 tsp low sodium soy sauce\n\n tsp sesame oil\n1 tbsp cold-pressed rapeseed oil\n\n2 leeks\n\nwashed and sliced\n1 garlic clove, finely grated\nthumb-sized piece ginger\n\nhalf grated, half cut into matchsticks\n2 pak choi\n\nshredded\n250g pouch wholegrain rice\n2 mackerel fillets\n red chilli, cut into thin strips\nMethod\nMix together 1 tsp miso, the vinegar, honey, soy and sesame oil with 1 tbsp water to make a dressing. Heat the grill to high. Line a grill pan with foil.\n\nPut 2 tsp rapeseed oil in a frying pan. Tip in the leeks and cook over a medium heat for 5 mins until starting to soften. Stir in the garlic, grated ginger and remaining miso. Cook until the leeks are soft. Add the pak choi and rice with 1 tbsp water, breaking up the rice with the back of a spoon. Cook until the pak choi is wilted, then turn the heat down to low.\n\nDrizzle the remaining oil over the mackerel and season. Put the fillets skin-side up on the grill pan and grill for 2-3 mins until just flaking.\n\nPour the dressing into the greens and rice. Mix well and divide between two bowls. Put the mackerel on top and scatter over the chilli and ginger.',
  title: 'Miso mackerel rice bowl',
},
{
  content: '2 chicken breasts\n tsp smoked paprika\n lemon\n\n, zested and juiced\n1 tbsp cold-pressed rapeseed oil\n\n1 garlic clove\n1 tsp fennel seeds\n\n1 fennel bulb\n\n, sliced\n400g can cherry tomatoes\n1 tbsp sherry vinegar\n200g pouch Puy lentils\n100g watercress\n\n2 tbsp natural yogurt\nhandful of dill, leaves picked\nMethod\nPut the chicken breasts between two sheets of baking parchment and, using a rolling pin, roll to a 1cm thickness. Rub with the paprika, lemon zest,  tbsp oil, salt and pepper. Cover and set aside while you start the lentils.\n\nHeat the remaining oil in a pan and add the garlic, fennel seeds and fennel slices with a pinch of salt. Cook for 5 mins until starting to soften, then tip in the tomatoes, vinegar and lentils. Turn down the heat and leave to bubble away.\n\nHeat another non-stick frying pan over a high heat, add the chicken breasts and cook for 7 mins, turning halfway, until golden brown and cooked through. Add the watercress to the lentils and stir to wilt, then squeeze in the lemon juice. Slice the chicken then serve it alongside the lentils with a dollop of yogurt and dill.',
  title: 'Crispy paprika chicken with tomatoes & lentils',
},
{
  content: '150g new potatoes\n\n, thickly sliced\n160g fine green beans, trimmed and halved\n160g frozen peas\nrapeseed oil\n\n, for brushing\n200g lean fillet steak, trimmed of any fat\n160g romaine lettuce, roughly torn into pieces\nFor the dressing\n1 tbsp extra virgin olive oil\n2 tsp cider vinegar\n tsp English mustard powder\n2 tbsp chopped mint\n\n3 tbsp chopped basil\n\n1 garlic clove, finely grated\n1 tbsp capers\n\nMethod\nCook the potatoes in a pan of simmering water for 5 mins. Add the beans and cook 5 mins more, then tip in the peas and cook for 2 mins until all the vegetables are just tender. Drain.\n\nMeanwhile, measure all the dressing ingredients in a large bowl and season with black pepper. Stir and crush the herbs and capers with the back of a spoon to intensify their flavours.\n\nBrush a little oil over the steak and grind over some black pepper. Heat a non-stick frying pan over a high heat and cook the steak for 4 mins on one side and 2-3 mins on the other, depending on the thickness and how rare you like it. Transfer to a plate to rest while you carry on with the rest of the salad.\n\nMix the warm vegetables into the dressing until well coated, then add the lettuce and toss again. Pile onto plates. Slice the steak and turn in any dressing left in the bowl, add to the salad and serve while still warm.',
  title: 'Seared beef salad with capers & mint',
},
{
  content: '1 tbsp rapeseed oil\n\n2 onions, halved and sliced\n2 tsp ground coriander\n2 tsp smoked paprika\n400g can chopped tomatoes\n2 tsp vegetable bouillon powder\n2 large courgettes, sliced\n400g can butter beans, drained\n180g cherry tomatoes\n160g frozen peas\n15g coriander, chopped\nFor the dukkah\n1 tsp coriander seeds\n1 tsp cumin seeds\n1 tbsp sesame seeds\n25g flaked almonds\nMethod\nHeat the oil in a large non-stick pan and fry the onions for 5 mins, stirring occasionally until starting to colour. Stir in the ground coriander and paprika, then tip in the tomatoes with a can of water. Add the bouillon powder and courgettes, cover and cook for 6 mins.\n\nMeanwhile, make the dukkah. Warm the whole spices, sesame seeds and almonds in a pan until aromatic, stirring frequently, then remove the pan from the heat.\n\nAdd the butter beans, tomatoes and peas to the courgettes, cover and cook for 5 mins more. Stir in the coriander, then spoon into bowls. Crush the spices and almonds using a pestle and mortar and scatter on top. If you\'re cooking for two people, put half the seed mix in a jar and chill half the veg for another day.',
  title: 'Egyptian courgettes with dukkah sprinkle',
}];

const promises = seedData.map(({ title, content }) => {
  const options = {
    method: 'POST',
    body: {
      content,
      title,
    },
    uri: 'http://localhost:8088/_store',
    json: true,
  };
  return rp(options);
});


// console.log(promises);
Promise.all(promises).then((res) => console.log('done')).catch(() => console.log('Seed failed..'));
