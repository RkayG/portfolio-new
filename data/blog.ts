import { BlogPost } from "@/types/blog";

export const allBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Demystifying Layer 2 Scaling Solutions",
    excerpt:
      "An in-depth look at the various Layer 2 solutions aiming to solve Ethereum's scalability problem, from Rollups to Sidechains. We explore the trade-offs and what they mean for the future of decentralized applications.",
    date: "October 26, 2023",
    categories: ["Blockchain", "Tutorials"],
    slug: "demystifying-layer-2-scaling-solutions",
    featuredImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATeBsszFAnTx3Zzj3wX0hO7CgSuOcGIiEk9oW5l0xSUNa9Vf8dmhKJec8cVMRvOB92QrB3Hb8TFRS8QLlcqksH1eZXecqv3baonskdJnGPOhTZ23SQOYpoaG_vroKl5qrsasU5SwUwr325dRS2PSON-cxo_ojUJD_SQD_sKRYPyKkrdm0112HrGwdN6Apy_3AI-mHatJsITvxhxVgsito2Jw4zThrmupCb0_WCBjq8ghHa1C8Nc4OMDD_L141qH__p1E9fxAAGZHE",
  },
  {
    id: "2",
    title: "Deep Dive into Smart Contract Security Audits",
    excerpt:
      "Security is paramount in the blockchain space. This guide covers common vulnerabilities in smart contracts, such as reentrancy and integer overflows, and provides best practices to write more secure and robust code.",
    date: "October 26, 2023",
    categories: ["Blockchain", "Security", "Smart Contracts", "Solidity"],
    slug: "deep-dive-into-smart-contract-security-audits",
    readTime: "10 min read",
    featuredImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX3rFZaAE_RKLE0_KOcUBmC8Sh2jroeQYdMOtABzbzupuKt2xULjheWvBR-Dp-vaSk40PbBfg8m7KfnVaXfgjOLjEvhHTq9R1H-WhPQV32sY2IfnTKs-kIfgc_oDq00NgYk288PeYfdbINSeBL8E06-OaD5PKcx7Z5VOn2CQiFhm8Qgko0ux1liojImIbII_bUlB2pblfS4kCKXBemIq_axoSNZLhLe927Gfp8qvFJw3J3Eov6Mutpn7Kec6w0dHudF0uJcZA16cg",
    featuredImageAlt: "Abstract graphic representing blockchain security concepts with interconnected nodes and digital locks.",
    author: {
      name: "Rufus Gladness",
      bio: "Rufus is a passionate software and blockchain engineer with over 8 years of experience building secure and scalable decentralized applications. He specializes in Solidity and smart contract security.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDgzNc16cZncjbs5YoN6iY-wb-xVhUGX_YXz4_PbqCsn7cUp1Bkv5hSG9FMv2aTPK0wQ2K79ozO6cfk0a5ENkOmKcduOpM0f0K6_X-pmCLKwbqruraXlHJ0d9FmI303H_t0yX7IiYas7-tUZLqFDtvyxT-9UI2Wtxv2jekAKEa3RGJK6QqO36c4O_m3iSp0Y-oo3c0vhoDSQsuOATr967oowHFFCwSZp7OIoGtNddE1RWchOrWghqs9d9VYu06jBySojWBreB99K6I",
      twitter: "https://x.com/gladness_rkay",
      github: "https://github.com/RkayG",
    },
    content: `<p>Smart contracts are the backbone of decentralized applications, automating agreements and transactions on the blockchain. However, their immutable nature means that vulnerabilities can lead to irreversible losses. This makes security auditing not just a best practice, but an absolute necessity. In this post, we'll explore the critical aspects of smart contract security audits, from common vulnerabilities to the best practices that ensure robust and secure code.</p>

<h2 class="font-handwriting text-primary !text-4xl !font-bold !mt-12 !mb-4">Common Vulnerabilities</h2>

<p>Understanding common pitfalls is the first step towards writing secure contracts. Auditors are trained to hunt for these specific issues, which often arise from subtle logical errors or misunderstandings of the Ethereum Virtual Machine (EVM).</p>

<blockquote class="border-l-4 border-primary bg-primary/10 dark:bg-primary/20 p-4 rounded-r-lg"><p class="!m-0">"The code is law, but the law can have loopholes. A security audit is the process of finding those loopholes before malicious actors do."</p></blockquote>

<p>Some of the most notorious vulnerabilities include reentrancy attacks, integer overflow/underflow, and front-running. A reentrancy attack, famously exploited in the DAO hack, allows an attacker to repeatedly withdraw funds from a contract before its balance is updated. Let's look at a code example.</p>

<div class="relative group">
<button class="absolute top-2 right-2 p-1.5 bg-accent-dark text-text-dark rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
<span class="material-symbols-outlined !text-base">content_copy</span>
Copy
</button>
<pre class="language-solidity bg-accent-dark !text-text-dark p-4 rounded-lg overflow-x-auto"><code class="language-solidity">// Insecure: vulnerable to reentrancy
function withdraw() public {
    uint amount = userBalances[msg.sender];
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Failed to send Ether");
    userBalances[msg.sender] = 0;
}

// Secure: uses checks-effects-interactions pattern
function secureWithdraw() public {
    uint amount = userBalances[msg.sender];
    userBalances[msg.sender] = 0; // Update state first
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Failed to send Ether");
}</code></pre>
</div>

<h2 class="font-handwriting text-primary !text-4xl !font-bold !mt-12 !mb-4">Best Practices for Auditing</h2>

<p>A thorough audit involves more than just scanning for known vulnerabilities. It's a comprehensive process that includes static analysis, dynamic analysis, and manual code review. The goal is to understand the contract's business logic and identify any potential deviations from its intended behavior.</p>

<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYfExn5BVMaw2FHD3PoXkTfZr9OXggs51Vz_RxhCkEp3KfDKGH7EWCW8C8C0g3QMj6bLMvVPKr5Vj6mSpYksu8vzbm8Uuf5kPAYr7fGL2QTtjrOdI2UPV6ta2U0Jyj7g3sbJuSOs8_ioI65UpgGJJijN8_8A_TO7ks0YGCP4KePHoBjNkpN7rfDeEY8BpuJeQehrMorTrTAilacJ1QmuqM0enngHw8fJcvU2OcUfLDJkba4WYZfeB5HAzmTyjuJYelCr_EkCq0894" alt="A flowchart diagram illustrating a security audit workflow with steps like code review, testing, and reporting." />

<figcaption>An example of a typical audit workflow diagram.</figcaption>

<p>Effective auditing combines automated tools with human expertise. Tools can quickly identify common issues, but a skilled auditor is needed to uncover complex logical flaws. The final report should provide a clear, actionable list of findings, categorized by severity, along with recommendations for remediation.</p>

<h3 class="font-handwriting text-primary !text-3xl !font-bold !mt-10 !mb-4">Conclusion</h3>

<p>Smart contract security is a continuous process, not a one-time checklist. A rigorous audit provides a critical snapshot of a contract's security posture at a specific point in time, building trust and confidence in the decentralized ecosystem. By investing in thorough security practices, developers can protect user funds and contribute to a safer, more reliable blockchain future.</p>`,
    comments: [
      {
        id: "1",
        author: "Jane Smith",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Hj3iqDxUZcv-_unhicXJfAMc6IblaLRGX88WOoyfa50RxPznNrmHZC0oSTDEqSYXnJrkW2OdIb7ZRiS76hsjZFVqntuTOm-rOVq9WTmiJY1PdMG5LHDJWuOEbR_DNK8lfPTWwBo-BTEqxTvmaWJTClyPwI0tPLT6ZurI0zMIYi82WHz5MNcfaPxLQXbkb89qeCDFkd7YfHXn1aLu1v0tmifnJ0ZJsoLPS4Zs42ituBBT21zjZRPraDWVlnt_avYlFEW-329998I",
        date: "October 27, 2023",
        content:
          "Great write-up! The explanation of the checks-effects-interactions pattern is super clear. It's a fundamental concept that's often overlooked.",
      },
      {
        id: "2",
        author: "Alex Johnson",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_vEGCcC9zg77BVqGVHDtm-eJpN9c503xov6QfhUQDffDjrc5Rrv6tVpoqK3wlzigiG7SXEyPKM-k-6XALN84ZNGgTGcKYClnHCwu96zGnofpu3oyxn40Z96DTaDS6y_MQyZ9Tq3jLmNhi_J5gB0FRhJWbpkWXKGfssDLrDS1hefYbs0VcN9f59B-e9VJ9tUY7ACX4fxQzoKIJqzSC4lSxWtR6iJoF2qcu6_-ihi84A_OFVDXZIMPIZeAWpCzkKDShXf0RI1QrcE",
        date: "October 28, 2023",
        content:
          "I'd also add the importance of using trusted libraries like OpenZeppelin. Reinventing the wheel, especially for things like SafeMath or access control, can introduce unnecessary risks.",
      },
      {
        id: "3",
        author: "Emily Carter",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA_V-H3tZsVR3UqhAPac5Gzae4poRYh1t5WZVp0bAM-RnU_t6980hXSJD5dc4dc6iTnnKbDRnEVytJHie2CgmYrt06WWHhg_NCrSFBNY7VxxjCdB3HhX3bWtZ782GNoo8eQmheHD0RuZp8bA4PVNK5lR-qX2FijWrchZZCzi3Rd4W3RR_yK0LZZQcrKAY5qN7KMtu272qLHwE35rYkGeAy2lwcYWdW9wpsjJuEwtJuUmoh6M8cda4WOHgaQsrt9TSj-YRpV1gbHUfY",
        date: "October 28, 2023",
        content:
          "The flowchart is a nice touch. Visualizing the audit process really helps to understand the different stages involved. Thanks for sharing!",
      },
    ],
  },
  {
    id: "3",
    title: "Building a Modern DApp with Next.js and Ethers.js",
    excerpt:
      "A step-by-step tutorial on creating a decentralized application from scratch. We'll set up a Next.js frontend, connect to the Ethereum blockchain with Ethers.js, and interact with a simple smart contract.",
    date: "August 02, 2023",
    categories: ["Web Development", "Tutorials"],
    slug: "building-modern-dapp-nextjs-ethers",
    featuredImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6CmzL1KtwHGbq3W5tubudEEvFbAqKnp2wspqsbX3zEoDrNXUge40CsdjhE3ic0ee3np4rBrr1eHq87E1Kf36Lx_1m6kIC2MBsyOc7t6nNMyVwli4-tqGyTTTPBwAQobDxvQN3KpPpbOMVjRBVLU_HluO4j6Kqy8k7okI73PlBY96kwDt4ykrew1KachOwMsDllHcIpluUUI15FHoU1KQkpY4J0bIHni5PO0XOfA1gFTYlYC981qXl7F4qS0bEeXuED7XOQCbLb0",
  },
];

