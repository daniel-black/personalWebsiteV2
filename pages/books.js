import BackButton from "../components/BackButton";
import Book from "../components/Book";

export default function Books() {
  return (
    <div class="space-y-4 leading-relaxed max-w-xl flex-grow">
      <BackButton />
      <h1 class="text-2xl sm:text-3xl font-jslab">
        Some of my all-time favorites&nbsp;&#10024;
      </h1>
      <ul className="space-y-3">
        <Book 
          href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872/ref=sr_1_1?keywords=zen+and+the+art+of+motorcycle+maintenance+book&qid=1657161020&sr=8-1"
          title='Zen and the Art of Motorcyle Maintenance'
          blurb='The first time I read this book I sped through it and totally missed the entire point. Take your time with this book, enjoy it like a slow motorcyle ride across the country.'
          emoji='🔧'
        />
        <Book 
          href='https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=sr_1_1?crid=3KMRCLVH4AU54&keywords=zero+to+one&qid=1657161259&sprefix=zero+to+one%2Caps%2C98&sr=8-1'
          title='Zero to One'
          blurb='This is my most re-read book by a long shot. If I had to boil it down to three words, they would be Do New Things. Also introduced is the contrarian question: "What important truth do very few people agree with you on?" A true tour de force in original thinking and I cannot recommend it enough.'
          emoji='🔥'
        />
        <Book 
          href='https://www.amazon.com/Last-First-Men-Olaf-Stapledon/dp/B09L3QZN4V/ref=sr_1_2?crid=HAUZVB018QNO&keywords=last+and+first+men&qid=1657162207&sprefix=last+and+first+men%2Caps%2C112&sr=8-2'
          title='Last and First Men'
          blurb='An amazingly weird and expansive sci-fi novel from 1930 that follows humanity deep into the future all the way up to her last days. What more could you want?'
          emoji='👽'
        />
        <Book 
          href='https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720'
          title='The Sovereign Individual'
          blurb='This book was ahead of it&apos;s time. One of my biggest takeaways is that different technologies raise or lower the returns to violence. The classic example is encryption. There is no amount of tanks, guns, and missiles that you can throw at a modern encryption algorithm to make the math bend to your will. And that is very cool.'
          emoji='👤'
        />
        <Book 
          href='https://www.amazon.com/Wright-Brothers-David-McCullough/dp/1476728755/ref=sr_1_1?crid=VSPR4E8AE94R&keywords=the+wright+brothers&qid=1657162877&s=books&sprefix=the+wright+brothers%2Cstripbooks%2C98&sr=1-1'
          title='The Wright Brothers'
          blurb="This book makes you feel like you can put a dent in the universe. No one had flown. People didn't fly. These boys just put their heads down and built those flying machines. Wild."
          emoji='🛩️'
        />
        <Book 
          href='https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714/ref=sr_1_3?crid=D5F8SCE6PNOP&keywords=anna+karenina&qid=1657163087&s=books&sprefix=Anna+%2Cstripbooks%2C132&sr=1-3'
          title='Anna Karenina'
          blurb='This is just a beautifully human story in all of our messiness and I love it. Read it please.'
          emoji='👩'
        />
        <Book 
          href='https://www.amazon.com/Fooled-Randomness-Hidden-Markets-Incerto/dp/0812975219/ref=sr_1_1?crid=3PUB8W8TSDMZU&keywords=fooled+by+randomness&qid=1657163207&s=books&sprefix=fooled+by+randomness%2Cstripbooks%2C115&sr=1-1'
          title='Fooled by Randomness'
          blurb='A lot to learn from this one. Numbers, man. They can really get ya sometimes.'
          emoji='🔢'
        />
        <Book 
          href='https://www.amazon.com/Dominion-Christian-Revolution-Remade-World/dp/1541675592/ref=sr_1_2?crid=184GIWUK4XWBN&keywords=dominion&qid=1657163316&s=books&sprefix=dominion%2Cstripbooks%2C80&sr=1-2'
          title='Dominion'
          blurb='Really thorough examination and history of the motive force shaping life in the West for the last 2000 years.'
          emoji='🌎'
        />
      </ul>
    </div>
  );
}