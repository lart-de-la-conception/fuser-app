import EmbedFrame from "./components/EmbedFrame";

export default function Home() {
  const r2PublicUrl = process.env.R2_PUBLIC_URL ?? "https://pub-2530e959493e4b6ea10ef19c815620c8.r2.dev";
  const imageSrc = {
    richter: `${r2PublicUrl}/fuser/richter.jpg`,
    tags: `${r2PublicUrl}/fuser/tags-for-sample.jpg`,
    chateau: `${r2PublicUrl}/fuser/chateau-marmont.jpg`,
    basic: `${r2PublicUrl}/fuser/basic-tee.png`,
    rothko: `${r2PublicUrl}/fuser/rothko-tee.png`,
  };

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-between px-4 py-12 md:px-8 md:py-16 max-w-[96rem] mx-auto">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Fuser - Junior Product Designer Application
          </span>
          <span className="text-xs tracking-widest text-neutral-400">
            Dylan Mitchell 
          </span>
        </header>

        <div className="flex-1 flex items-center justify-center py-24">
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-light leading-tight md:leading-snug tracking-tight max-w-6xl">
            I want to work at Fuser because I want to design. I want to explore 
            creativity with AI and define what that means. AI has the potential 
            to increase productivity and creativity. Fuser is at the forefront of this 
            and I would love to be a part of it.   
          </h1>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 tracking-wide">Scroll to explore</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs tracking-wide text-neutral-400">
            <a href="#using-fuser" className="hover:text-black transition-colors">How I Use Fuser</a>
            <a href="#observations" className="hover:text-black transition-colors">Observations</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </section>

      <div className="w-full h-px bg-neutral-100" />

      {/* Section: How I've been using Fuser */}
      <section id="using-fuser" className="min-h-screen flex flex-col justify-center px-4 py-24 md:px-8 max-w-[96rem] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-24 gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <span className="text-xs tracking-widest uppercase text-neutral-400 block mb-3">01</span>
            <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight">
              How I've been using Fuser
            </h2>
          </div>
          <div className="md:w-2/3 min-w-0">
            <p className="text-lg text-neutral-700 leading-relaxed font-light">
              I've been using Fuser to visualize my ideas and it's been great. It's introduced me to 
              many new models and allowed me to play around with them intuitively.

              I spent some time in Japan and I was working on a clothing brand there with a 
              few factories. Fuser made the process of visualizing my thoughts for
              designs easier and allowed me to better express my ideas with the team I am
              working with. Below are some mockups. On my personal site, 
              <a href="https://dylanroman.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">dylanroman.co</a>, 
              I also made something using the Creative Coder hidden behind the painting on the right.
         
            </p>
          </div>
        </div>

        <div className="space-y-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="space-y-4 max-w-[34rem] mx-auto w-full">
              <img
                src={imageSrc.richter}
                alt="richter tee"
                className="w-full aspect-square object-cover"
              />
            </article>
            <article className="space-y-4 max-w-[34rem] mx-auto w-full">
              <img
                src={imageSrc.tags}
                alt="sample tags"
                className="w-full aspect-square object-contain bg-white"
              />
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="space-y-4 max-w-[34rem] mx-auto w-full">
              <img
                src={imageSrc.chateau}
                alt="chateau marmont tee"
                className="w-full aspect-square object-cover"
              />
            </article>
            <article className="space-y-4 max-w-[34rem] mx-auto w-full">
              <img
                src={imageSrc.rothko}
                alt="rothko tee"
                className="w-full aspect-square object-cover"
              />
            </article>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-neutral-100" />

      {/* Section: Product Observations / Redesigns */}
      <section id="observations" className="min-h-screen flex flex-col justify-center px-4 py-24 md:px-8 max-w-[96rem] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-24 gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <span className="text-xs tracking-widest uppercase text-neutral-400 block mb-3">02</span>
            <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight">
              Product observations &amp; redesigns
            </h2>
          </div>
          <div className="md:w-2/3 min-w-0">
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
            These are a few interaction and workflow ideas I explored while using Fuser that I felt could improve 
            the overall flow and productivity of a session. I designed and prototyped these concepts in Figma Make 
            based on friction points I noticed during use.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              RUNNING NODES IN A CONSECUTIVE SEQUENCE
            </h3>
            <p className="text-base text-neutral-700 font-light leading-relaxed min-h-12">
            I often found myself placing two dependent nodes and manually running them one at a time. 
            I designed a consecutive execution pattern that reduced clicks and made iterative workflows 
            feel faster and more seamless. To the run node, I added two options on hover. Either to run
            the entire pipeline or the node itself. By default, it should run the node itself.
            </p>
            <EmbedFrame
              src="https://marvel-think-83817429.figma.site/"
              title="RUNNING NODES IN A CONSECUTIVE SEQUENCE"
            />
          </div>

          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              BOUNDING BOX CONTROL
            </h3>
            <p className="text-base text-neutral-700 font-light leading-relaxed min-h-12">
            As seen in the previous section, I&apos;ve been using Fuser to visualize products. I often found myself 
            wanting to see how a graphic would look placed onto something else, but describing the 
            exact size and placement through prompts didn&apos;t always match what I had in mind. I thought 
            a bounding box control could give users more direct control over placement and sizing during 
            the generation process.
            </p>
            <EmbedFrame
              src="https://act-rhyme-00374814.figma.site"
              title="BOUNDING BOX CONTROL"
            />
          </div>

          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              DELETING A CONNECTION TO A NODE
            </h3>
            <p className="text-base text-neutral-700 font-light leading-relaxed min-h-12">
            I found that deleting connections between nodes could feel a bit difficult at times, 
            especially from a zoomed out view where selecting the line precisely became harder. 
            I redesigned the interaction so users could delete a connection from anywhere along 
            the line instead of only near the node. To prevent accidental triggers while moving 
            around the canvas, the delete state appears after a brief hover and fades the line 
            into red to more clearly communicate the action.
            </p>
            <EmbedFrame
              src="https://latch-post-97827664.figma.site"
              title="DELETING A CONNECTION TO A NODE"
            />
          </div>

          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              SWAP NODE FOR ANOTHER MODEL
            </h3>
            <p className="text-base text-neutral-700 font-light leading-relaxed min-h-12">
            Sometimes when I ran a model I wasn’t happy with the result, but using the same image and 
            prompt in a different model often produced something better. To do this, though, I needed 
            to create a separate node and repeat the same setup again. I explored a simpler interaction 
            that allowed users to swap the model directly within the existing node while keeping the same 
            prompt and attachments, making iteration feel much faster and more seamless.
            </p>
            <EmbedFrame
              src="https://figma-show-16352723.figma.site"
              title="SWAP NODE FOR ANOTHER MODEL"
            />
          </div>

          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              EDIT RESPONSE FROM LLM
            </h3>
            <p className="text-base text-neutral-700 font-light leading-relaxed min-h-12">
            I sometimes used an LLM to generate a more detailed prompt based on what I wanted to create. 
            Occasionally, parts of the generated response didn’t fully align with the vision I had in mind 
            and would affect the final output. So, I allowed users to directly edit the generated response
            before attaching it to another node or rerunning the workflow, making the iteration process feel more 
            flexible and controlled when relying on AI genereated prompts.
            </p>
            <EmbedFrame
              src="https://cream-solar-04945370.figma.site"
              title="EDIT RESPONSE FROM LLM"
              iframeClassName="absolute left-0 top-0 h-[830px] w-[154%] origin-top-left scale-[0.65] border-0"
            />
          </div>

          <div className="border border-neutral-100 rounded-lg bg-neutral-50 p-6 space-y-4">
            <h3 className="text-base md:text-lg tracking-wide text-neutral-700 font-medium">
              OTHER CONSIDERATIONS
            </h3>
            <ul className="space-y-3 text-base text-neutral-700 font-light leading-relaxed">
              <li>Improving Toast error alert to provide more detailed response for user</li>
              <li>Introducing system instructions for prompts generated by LLMs</li>
              <li>Adding labels to image, video, and text nodes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 md:px-8 max-w-[96rem] mx-auto">
        <div className="px-6 py-14 md:px-10 md:py-16 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-800">
            Thank you for your consideration
          </h2>
          <p className="text-sm md:text-base text-neutral-500 font-light tracking-wide break-words">
            dylan_mitchell@outlook.com | +1 (561) 485-9924 |{" "}
            <a
              href="https://dylanroman.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              dylanroman.co
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/dylanroman03"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              linkedin.com/in/dylanroman03
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
