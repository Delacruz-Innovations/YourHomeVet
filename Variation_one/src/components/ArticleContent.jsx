import React from 'react';
import { Link as LinkIcon, Share2 } from 'lucide-react';

export default function ArticleContent() {
  return (
    <section className="relative w-full pt-16 lg:pt-32 sm:py-12 lg:pt-40 lg:pt-12 lg:pt-24 lg:pt-48 pb-16 lg:pb-12 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      
      <div className="max-w-5xl mx-auto relative flex items-start gap-12">
        
        {/* Floating Sticky Socials Sidebar */}
        <aside className="hidden lg:flex flex-col gap-4 sticky top-32 w-12 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            SHARE
          </span>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <Share2 size={16} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <LinkIcon size={16} />
          </button>
        </aside>
        
        {/* Main Article Body */}
        <article className="w-full max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg prose-headings:font-serif prose-p:leading-[1.8] prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-a:text-black dark:prose-a:text-white prose-a:font-bold prose-img:rounded-sm">
          
          <p className="lead text-xl sm:text-2xl font-serif text-slate-800 dark:text-slate-200 leading-[1.6] mb-10">
            Diabetes is manageable in dogs, but knowing the signs early makes all the difference. Here's what every owner should know to ensure their furry friend lives a long, healthy life.
          </p>
          
          <p>
            Just like humans, dogs can develop diabetes, a condition that affects how their body uses blood sugar (glucose). Glucose is a vital source of energy for the cells that make up muscles and tissues, and it's the brain's main source of fuel. For glucose to enter cells, the body needs insulin. Without enough insulin, glucose builds up in the bloodstream, leading to diabetes.
          </p>

          <h2>Understanding the Symptoms</h2>
          
          <p>
            Early detection is crucial for managing diabetes effectively. Some of the most common signs include:
          </p>
          <ul>
            <li><strong>Excessive Thirst:</strong> A dog with diabetes may drink water much more frequently and in larger quantities.</li>
            <li><strong>Increased Urination:</strong> Due to drinking more water and the body's attempt to flush out excess sugar, they will need to urinate more often.</li>
            <li><strong>Weight Loss:</strong> Despite having a normal or increased appetite, the dog may lose weight because the body is breaking down fat and muscle for energy.</li>
            <li><strong>Lethargy:</strong> A lack of energy or unwillingness to play or go for walks.</li>
          </ul>

          <figure className="my-12">
            <img 
              src="https://images.unsplash.com/photo-1537151608805-ea811160f6ee?auto=format&fit=crop&q=80&w=1200" 
              alt="Veterinarian examining dog" 
              className="w-full h-auto"
            />
            <figcaption className="text-center text-[12px] text-slate-500 mt-3 font-sans">
              Regular check-ups can help catch the early warning signs of diabetes.
            </figcaption>
          </figure>

          <h2>Diagnosis and Treatment</h2>
          
          <p>
            If you notice any of these signs, it's vital to seek veterinary care. Diagnosis typically involves blood and urine tests to check for high glucose levels. Once diagnosed, the primary goal of treatment is to maintain blood glucose levels within a normal range.
          </p>

          <blockquote>
            "With the right diet, consistent insulin therapy, and regular monitoring, a dog with diabetes can live a full, happy life alongside their owners." 
            <footer className="mt-2">— Dr. Sarah Jenkins, Lead Veterinarian</footer>
          </blockquote>

          <p>
            Treatment usually requires a multifaceted approach:
          </p>
          
          <ol>
            <li><strong>Insulin Therapy:</strong> Most dogs will require daily insulin injections. Your vet will teach you how to administer these safely and effectively at home.</li>
            <li><strong>Dietary Changes:</strong> A diet high in fiber and complex carbohydrates helps slow the absorption of glucose. Consistent meal times are also critical.</li>
            <li><strong>Exercise Routine:</strong> Regular, moderate exercise helps lower blood glucose levels and keeps your dog at a healthy weight.</li>
          </ol>

          <h3>Living with a Diabetic Dog</h3>
          
          <p>
            Managing diabetes requires a commitment, but it quickly becomes a routine part of daily life. By keeping a close eye on your dog's behavior, maintaining their treatment schedule, and working closely with your veterinary team, you can ensure your dog continues to thrive.
          </p>
          
          <p>
            Remember, if you ever suspect a sudden drop or spike in your dog's blood sugar, treat it as an emergency and contact an out-of-hours vet immediately.
          </p>

        </article>
      </div>

    </section>
  );
}
