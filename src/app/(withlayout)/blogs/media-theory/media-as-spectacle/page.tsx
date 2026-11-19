import Link from "next/link";
import blogData from "@/data/media-theory-blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";

// Define type
type BlogPostType = {
  title: string;
  id: string;
  date: string;
  tag: string;
  description: string
};

// Resolve file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract "media-theory" and id from the file path
const segments = __dirname.split(path.sep);
const tag = segments[segments.length - 2]; // "media-theory"
const id = segments[segments.length - 1]; // id

// Find the selected blog post
const blogDataArray: BlogPostType[] = blogData;
const selectedBlog = blogDataArray.find(
  (post) => post.tag === tag && post.id === id
);

if (!selectedBlog) {
  throw new Error("Blog not found");
}

// Find the blog series title
const selectedBlogSeries = blogSeries[(blogSeries.findIndex((item) => item.blogTag == tag))].blogName;

export default function Main() {
  return (
    <div>
          {/* metadata */}
          <h2>{selectedBlog?.title}</h2>
          <p className="text-date">{selectedBlog?.date}</p>
          <p className="mb-4 text-secondary">
            <b>Blog series: </b>
            <Link key={tag} href={`/blogs/${tag}`} className="hover:underline">
              {selectedBlogSeries}
            </Link>
          </p>
          <p>{selectedBlog?.description}</p>
          
          {/* blog content */}
          <div>
            <p>This week&apos;s readings are Society of Spectacle (1967) by Guy Debord, Simulations (1981) by Jean Baudrillard, and Mythologies (1957) by Roland Barthes. Upon the end of World War II, European countries, while enjoying the post-war peace, were trapped by consumerism. Society and people&apos;s lifestyles underwent drastic changes, which prompted philosophers like Debord and Baudrillard to analyze and critique consumerism and capitalism.</p>
            <p>Society of Spectacle in the format of numbered theses reminds me of Industrial Society and Its Future by Ted Kaczynski, though written in a more descriptive and academic style. Influenced by Marx, Debord built upon Marx&apos;s theory of capitalism. Like Marx, he also mentioned the concept of alienation in the age of film, advertisement, and TV. One of the key concepts in this book is the spectacle: “The spectacle is not a collection of images but a social relation among people mediated by images.” For example, advertising is a kind of spectacle stimulating our desire for new products. As a key member of Situationist Internationale, Debord shows his clear attitude against consumerism. According to Debord, we no longer focus only on the functional aspects of a product when buying a product; more importantly, we think of how our appearances benefit from buying and owning the product. Based on the logic of consumerism, products also have the function of signifiers. This reminds me of Disney&apos;s launch of its new character LinaBell, immediately after which many Chinese celebrities and KOLs were posting their photos with a LinaBell plush toy on social media. Therefore, many people started to believe that they needed a LinaBell plush toy and tried to buy it at a high price (since Disney&apos;s official store has long been out of stock). Interestingly, unlike other Disney characters like Winnie and Mickey, LinaBell doesn&apos;t have a story in Disney World, so people wanted to buy it mainly due to its sign value (according to Baudrillard&apos;s framework). This was the first time I realized the power of consumerism and the fetishism of commodities.</p>
            <p>Jean Baudrillard in his book analyses Disneyland from another perspective. In the first chapter “The Precession of Simulacra” under the section “Hyperreal and Imaginary”, Baudrillard writes: “Disneyland is a perfect model of all the entangled orders of simulation.” He points out that places like Disneyland appear as simulations, thus making people believe that the world outside these places is reality. However, the postmodern world is also filled with simulations and simulacra. I found Baudrillard&apos;s interpretation of the Watergate Scandal interesting: “Watergate is not a scandal”. In my understanding, he means that the Watergate Scandal is a tool for covering other intricacies unacceptable by the social contract on which capitalist society is based. The public shifted attention to the scandal and unconsciously assumed that other parts of society were free from this kind of problem. Baudrillard also thinks that the definition of truth has changed to what can be reproduced equivalently. I don&apos;t understand this sentence, but it reminds me of how people nowadays make judgments based on what they learn from mass media rather than their own experiences. A typical example is the stereotypes people have about foreign countries. The sentence also reminds me of the “That Girl” video series on social media: should we believe that those life experiences are other people&apos;s reality? Similarly, the Loud family TV series mentioned in the Simulations blurred the line between simulation and reality.</p>
            <p>Mythologies by Roland Barthes seems to be about different topics from the previous two, but I found it connected to many of our readings by writing about signifier, signified, and sign, and how they are differentiated in linguistic systems and myths. In last week&apos;s reading by Fredric Jameson, he mentioned the “breakdown of the signifying chain”, a trait of the postmodern age.  Based on this week&apos;s readings by Debord, products are signs of social relations; Baudrillard suggests that simulacra are signs of social rapport and social power. I am not familiar with Western mythologies as signifiers, but I think they function like four-character Chinese idioms, which originated from historical stories and later formed into phrases with specific meanings.</p>
          </div>
        </div>
  );
}
