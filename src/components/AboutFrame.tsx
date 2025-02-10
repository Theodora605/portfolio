import ProfileImg from "../assets/profile-picture.png";
import GitHubImg from "../assets/github.png";
import GmailImg from "../assets/gmail.png";
import LinkedinImg from "../assets/linkedin.png";
import ResumeImg from "../assets/profile.png";
import ResumePdf from "../assets/downloads/theo_goossens.pdf";

const AboutFrame = () => {
  return (
    <div className="flex gap-8 self-center justify-center">
      <div className="self-center">
        <img
          className="h-auto w-[340px] border-[5px] border-solid border-dark-brown rounded-[150px]"
          src={ProfileImg}
        />
        <div className="grid grid-cols-4 self-center gap-4">
          <a
            className="m-auto"
            target="_blank"
            href="https://www.linkedin.com/in/theo-goossens1/"
          >
            <img className="h-auto w-[60px]" src={LinkedinImg} />
          </a>
          <a
            className="m-auto"
            target="_blank"
            href="https://github.com/Theodora605"
          >
            <img className="h-auto w-[60px]" src={GitHubImg} />
          </a>
          <a className="m-auto" href="mailto:theodore.goossens@gmail.com">
            <img className="h-auto w-[60px]" src={GmailImg} />
          </a>
          <a className="m-auto" target="_blank" href={ResumePdf}>
            <img className="h-auto w-[60px]" src={ResumeImg} />
          </a>
        </div>
      </div>
      <div className="self-center w-8/12 h-auto bg-dark-brown p-2 rounded-lg">
        <div className="self-center gap-3 bg-amber-100 border-dark-brown border-solid border-[3px] p-3 rounded-xl">
          <p className="text-lg font-bold my-1">I am a Chronic Tinkerer</p>
          <p>
            As a lifelong tinkerer, I have always been curious about what makes
            things do what they do. From a very young age, I figured out how to
            disassemble my toys to inspect their inner mechanisms, and put them
            back together once I had observed how each intricate part interacted
            with the next to make the toy do whatever it did. The moment I was
            introduced to video games, I became fascinated by this new world of
            possibilities that programming and coding had opened up. I would
            study the internal logic, and use cheat engines to observe the
            memory registers when playing video games. Between tinkering with
            toys and games, and binge-watching <i>How it's Made</i> on T.V., it
            is no surprise that to this day, I love nothing more than diving
            into new projects, and immersing myself in learning everything I can
            about each step of the process!
          </p>
          <p className="text-lg font-bold my-1">Mathematician and Developer</p>
          <p>
            My childhood passion for learning led me to pursue further education
            in my favourite fields, earning myself a bachelor's degree in
            computer science, and a master's degree in mathematics. What I enjoy
            most about math is that every new topic I look at provides me with
            new perspectives and ways of thinking. There is nothing more
            satisfying to me than coming up with an elegant, succinct solution
            to a problem. This translates particularly well to programming, as
            each new project presents its own supply of unique problems
            requiring efficient solutions! Today, I find enjoyment in always
            having a project to work on, and completing my daily Leetcode
            problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFrame;
