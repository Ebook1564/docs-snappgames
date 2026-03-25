import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function AndroidWebView() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header Section */}
        <section id="webview-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🤖 Android Integration
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Add Unique Link using <span className="text-blue-600">Android WebView</span>
          </h1>
          <p className="text-xl text-zinc-950 dark:text-zinc-400 leading-9 max-w-4xl">
            If you prefer using a standard WebView component instead of Chrome Custom Tabs, follow this guide to integrate SnappGames into your Android app.
          </p>
        </section>

        {/* Implementation Steps */}
        <section id="implementing-webview" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Implementing WebView steps
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div id="step-1" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">1</span>
                Update the build.gradle file
              </h3>
              <p className="text-zinc-950 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
                You have to make an update in the <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">app/build.gradle</code> file. 
                Within the dependencies block, include the following line:
              </p>
              <div className="ml-11">
                <CodeBlock 
                  code={`dependencies {\n    implementation("androidx.webkit:webkit:1.8.0")\n}`} 
                  language="gradle" 
                  filename="app/build.gradle"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div id="step-2" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">2</span>
                Create GameWebViewActivity
              </h3>
              <p className="text-zinc-950 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
                In Android Studio&apos;s Project view, navigate to your package folder (e.g., <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">app &rarr; src &rarr; main &rarr; java &rarr; your.package.name</code>).
                Right-click on the package folder, select <strong>New &rarr; Kotlin Class/File</strong>, choose <strong>Class</strong>, and name it <code className="text-blue-600 font-bold">GameWebViewActivity</code>.
              </p>
            </div>

            {/* Step 3 */}
            <div id="step-3" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">3</span>
                Add the source code
              </h3>
              <p className="text-zinc-950 dark:text-zinc-400 mb-6 ml-11 leading-relaxed">
                Replace the contents of <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400">GameWebViewActivity.kt</code> with the following code:
              </p>
              <div className="ml-11">
                <CodeBlock 
                  code={`import android.graphics.Color\nimport android.os.Build\nimport android.os.Bundle\nimport android.view.View\nimport android.webkit.CookieManager\nimport android.webkit.WebSettings\nimport android.webkit.WebView\nimport android.webkit.WebViewClient\nimport androidx.appcompat.app.AppCompatActivity\n\nclass GameWebViewActivity : AppCompatActivity() {\n\n    private lateinit var myWebView: WebView\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)        setContentView(R.layout.activity_game_webview)\n\n        myWebView = findViewById(R.id.myWebView)\n\n        configureWebViewSettings()\n\n        val gameUrl = intent.getStringExtra("game_url") ?: "https://11081.play.gamezop.com/"\n        myWebView.loadUrl(gameUrl)\n    }\n\n    private fun configureWebViewSettings() {\n        myWebView.settings.apply {\n            javaScriptEnabled = true\n            domStorageEnabled = true\n            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW\n            setSupportZoom(false)\n            builtInZoomControls = false\n            displayZoomControls = false\n        }\n\n        myWebView.apply {\n            setSoundEffectsEnabled(true)\n            scrollBarStyle = View.SCROLLBARS_INSIDE_OVERLAY\n            setBackgroundColor(Color.BLACK)\n            webViewClient = WebViewClient()\n        }\n\n        CookieManager.getInstance().apply {\n            setAcceptCookie(true)\n            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n                setAcceptThirdPartyCookies(myWebView, true)\n            }\n        }\n    }\n}`} 
                  language="kotlin" 
                  filename="GameWebViewActivity.kt"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 mb-12">
          <Link href="/android-cct" className="flex items-center gap-2 text-zinc-800 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Android (CCT)
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
