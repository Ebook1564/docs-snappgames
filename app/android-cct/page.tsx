import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function AndroidIntegration() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header Section */}
        <section id="android-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🤖 Android Integration
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Android <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Integration</span>
          </h1>
          <p className="text-xl text-zinc-900 dark:text-zinc-400 leading-9 max-w-4xl">
            Integrating SnappGames into your Android application is straightforward. We provide two robust methods to launch your Unique Links: Chrome Custom Tabs (CCT) and a native WebView implementation.
          </p>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="scroll-mt-24 p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">
            Choosing the Right Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-emerald-600 flex items-center gap-2 tracking-tighter">
                Chrome Custom Tabs (CCT)
              </h3>
              <ul className="list-disc list-inside text-sm text-zinc-900 dark:text-zinc-400 space-y-2">
                <li><strong>Best Performance:</strong> Uses the system browser engine.</li>
                <li><strong>Shared Cookies:</strong> Users remain logged into their Google/browser accounts.</li>
                <li><strong>Safe & Secure:</strong> Managed by Chrome for the latest security updates.</li>
                <li><strong>Recommended for Ad revenue:</strong> Better signal for ad providers.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-black text-blue-600 flex items-center gap-2 tracking-tighter">
                Android WebView
              </h3>
              <ul className="list-disc list-inside text-sm text-zinc-900 dark:text-zinc-400 space-y-2">
                <li><strong>Full UI Control:</strong> Customize the toolbar and navigation entirely.</li>
                <li><strong>In-App Experience:</strong> Keeps the user strictly within your app&apos;s UI.</li>
                <li><strong>Persistent Session:</strong> More control over how data is cached in-app.</li>
                <li><strong>Legacy Support:</strong> Helpful for apps with specific browser requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section id="prerequisites" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">
            Prerequisites
          </h2>
          <p className="text-zinc-900 dark:text-zinc-400 mb-6 leading-relaxed">
            Ensure your app has the internet permission enabled in <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">AndroidManifest.xml</code>:
          </p>
          <CodeBlock
            code={`<uses-permission android:name="android.permission.INTERNET" />`}
            language="xml"
            filename="AndroidManifest.xml"
          />
        </section>

        {/* Step 1: Dependencies */}
        <section id="step-1" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">1</span>
            Update the build.gradle file
          </h2>
          <p className="text-zinc-950 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
            Add the following dependencies to your <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">app/build.gradle</code> file:
          </p>
          <div className="ml-11">
            <CodeBlock
              code={`dependencies {\n  // Android WebView Support\n    implementation("androidx.webkit:webkit:1.8.0")\n}`}
              language="gradle"
              filename="app/build.gradle"
            />
          </div>
        </section>

        {/* Method 1: CCT */}
        <section id="method-cct" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="flex-none w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-emerald-500/20">2A</span>
            Option 1: Chrome Custom Tabs (Recommended)
          </h2>
          <p className="text-zinc-900 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
            This method launches the game in a secure, high-performance browser tab within your app.
          </p>
          <div className="ml-11">
            <CodeBlock
              code={`CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder();\nCustomTabsIntent customTabsIntent = builder.build();\n\nfindViewById(R.id.snappgamesButton).setOnClickListener(new View.OnClickListener() {\n    @Override\n    public void onClick(View view) {\n        // Launch your SnappGames Unique Link\n        String url = "https://www.snappgames.com/?id=44"; \n        customTabsIntent.launchUrl(MainActivity.this, Uri.parse(url));\n    }\n});`}
              language="java"
              filename="MainActivity.java"
            />
          </div>
        </section>

        {/* Method 2: WebView */}
        <section id="method-webview" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">2B</span>
            Option 2: Android WebView Integration
          </h2>
          <div className="ml-11 space-y-8">
            <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
              For a more customized experience, you can host the game directly within an Activity using a Managed WebView.
            </p>
            <div>
              <h4 className="font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">1. Create GameWebViewActivity</h4>
              <p className="text-sm text-zinc-800 dark:text-zinc-400 mb-4">
                In Android Studio, go to <strong>app &rarr; src &rarr; main &rarr; java &rarr; your.package</strong>. Right-click and select <strong>New &rarr; Kotlin Class/File</strong>, and name it <code className="text-blue-600 font-bold">GameWebViewActivity</code>.
              </p>
            </div>
            <div>
              <h4 className="font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">2. Implementation details</h4>
              <CodeBlock
                code={`import android.graphics.Color\nimport android.os.Build\nimport android.os.Bundle\nimport android.view.View\nimport android.webkit.CookieManager\nimport android.webkit.WebSettings\nimport android.webkit.WebView\nimport android.webkit.WebViewClient\nimport androidx.appcompat.app.AppCompatActivity\n\nclass GameWebViewActivity : AppCompatActivity() {\n    private lateinit var myWebView: WebView\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_game_webview)\n        myWebView = findViewById(R.id.myWebView)\n\n        configureWebViewSettings()\n\n        // Retrieve game URL from Intent or use default\n        val gameUrl = intent.getStringExtra("game_url") ?: "https://snappgames.com/?id=42"\n        myWebView.loadUrl(gameUrl)\n    }\n\n    private fun configureWebViewSettings() {\n        myWebView.settings.apply {\n            javaScriptEnabled = true\n            domStorageEnabled = true\n            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW\n            setSupportZoom(false)\n            builtInZoomControls = false\n            displayZoomControls = false\n        }\n\n        myWebView.apply {\n            setSoundEffectsEnabled(true)\n            scrollBarStyle = View.SCROLLBARS_INSIDE_OVERLAY\n            setBackgroundColor(Color.BLACK)\n            webViewClient = WebViewClient()\n        }\n\n        // Ensure cookies are handled for session persistence\n        CookieManager.getInstance().apply {\n            setAcceptCookie(true)\n            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n                setAcceptThirdPartyCookies(myWebView, true)\n            }\n        }\n    }\n}`}
                language="kotlin"
                filename="GameWebViewActivity.kt"
              />
            </div>
          </div>
        </section>

        {/* Step 3: XML Changes */}
        <section id="step-3" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">3</span>
            Make the relevant XML changes
          </h2>
          <p className="text-zinc-800 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
            Ensure that the <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">android:id</code> attribute
            of your widget (Button or Image) is set to <code className="text-blue-600 font-bold">@+id/snappgamesButton</code>.
          </p>
          <div className="ml-11">
            <CodeBlock
              code={`<Button\n    android:id="@+id/snappgamesButton"\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:text="Play Game" />`}
              language="xml"
              filename="res/layout/activity_main.xml"
            />
          </div>
        </section>

        {/* Best Practices & Handling Back Button */}
        <section id="best-practices" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">
            Best Practices
          </h2>
          <div className="space-y-8 ml-11">
            <div>
              <h4 className="font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">Handling the Back Button (WebView)</h4>
              <p className="text-sm text-zinc-800 dark:text-zinc-400 mb-4 leading-relaxed">
                When using a WebView, you should handle the device&apos;s back button to ensure users can navigate back through the game&apos;s history instead of immediately closing the Activity:
              </p>
              <CodeBlock
                code={`override fun onBackPressed() {\n    if (myWebView.canGoBack()) {\n        myWebView.goBack()\n    } else {\n        super.onBackPressed()\n    }\n}`}
                language="kotlin"
                filename="GameWebViewActivity.kt"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="scroll-mt-24 pb-20">
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What if Chrome is not installed on the user's device?",
                a: "If Chrome is not present, Chrome Custom Tabs will automatically fall back to the default browser installed on the device, ensuring the game still opens."
              },
              {
                q: "Can I use Java for the WebView implementation?",
                a: "Yes, the logic is identical. You can simply translate the Kotlin property and method calls to their Java equivalents."
              },
              {
                q: "Why is my WebView showing a blank screen?",
                a: "Ensure you have added the INTERNET permission to your Manifest and that JavaScript is enabled in your WebView settings."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors group shadow-sm">
                <h4 className="font-black text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors tracking-tighter">{faq.q}</h4>
                <p className="text-sm text-zinc-800 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 mb-12">
          <Link href="/concepts" className="flex items-center gap-2 text-zinc-800 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Core Concepts
          </Link>
          <Link href="/unity" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold text-right">
            Unity Plugin
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
