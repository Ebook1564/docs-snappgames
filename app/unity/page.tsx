import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function UnityIntegration() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in">
        {/* Header Section */}
        <section id="unity-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🎮 Unity Integration
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Unity WebView <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Integration Guide</span>
          </h1>
          <p className="text-xl text-zinc-900 dark:text-zinc-400 leading-9 max-w-4xl">
            This guide provides comprehensive step-by-step instructions to integrate a WebView component into any Unity game project.
            The WebView allows you to display web content directly within your Unity application.
          </p>
        </section>

        {/* Prerequisites */}
        <section id="prerequisites" className="scroll-mt-24 p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2zM5.41 12L12 5.41 18.59 12 12 18.59 5.41 12z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">Prerequisites</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Unity Editor (2019.4 or later recommended)",
              "WebView custom package (.unitypackage file)",
              "WebView script folder (provided separately)",
              "Game icon image for Website button (PNG/Sprite)",
              "Basic knowledge of Unity Editor interface"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-800 dark:text-zinc-400">
                <svg className="w-5 h-5 text-blue-500 mt-1 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <div className="space-y-16">
          {/* Step 1 */}
          <section id="step-1" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-4 tracking-tighter">
              <span className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20">1</span>
              Open Your Unity Project
            </h2>
            <div className="ml-14 space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-zinc-800 dark:text-zinc-400 text-lg font-medium">
                <li>Launch Unity Hub from your desktop.</li>
                <li>From the Projects list, select your target Unity game project.</li>
                <li>Click Open to load the project in Unity Editor.</li>
                <li>Wait for the project to fully load and compile.</li>
              </ol>
            </div>
          </section>

          {/* Step 2 */}
          <section id="step-2" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-4 tracking-tighter">
              <span className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20">2</span>
              Load the Main Scene
            </h2>
            <div className="ml-14 space-y-6">
              <ol className="list-decimal list-inside space-y-3 text-zinc-800 dark:text-zinc-400 text-lg font-medium">
                <li>In the Project window (bottom panel), navigate to your game&apos;s Scenes folder.</li>
                <li>Locate your main scene file (commonly named MainScene, GameScene, or Level1).</li>
                <li>Double-click the scene to open it in the Hierarchy.</li>
                <li>Verify that the scene contains a Canvas GameObject (required for UI elements).</li>
              </ol>
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex items-start gap-4">
                <span className="text-2xl mt-1">💡</span>
                <p className="text-zinc-900 dark:text-amber-200 text-sm font-medium">
                  <strong>Note:</strong> If your scene doesn&apos;t have a Canvas, create one by right-clicking in the Hierarchy → UI → Canvas.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section id="step-3" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-4 tracking-tighter">
              <span className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20">3</span>
              Create the Website Button
            </h2>
            <div className="ml-14 space-y-6">
              <ol className="list-decimal list-inside space-y-3 text-zinc-900 dark:text-zinc-400 text-lg font-medium">
                <li>In the Hierarchy window, locate and select your main Canvas GameObject.</li>
                <li>Right-click on the Canvas → Create Empty.</li>
                <li>Rename the newly created GameObject to <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400 font-bold">[WebsiteButton]</code>.</li>
                <li>With <code className="text-blue-600 font-bold">[WebsiteButton]</code> selected in the Inspector:
                  <ul className="mt-4 ml-8 list-disc space-y-2 text-base">
                    <li>Click Add Component in the Inspector.</li>
                    <li>Search for and add <code className="text-blue-500">Image</code> component.</li>
                    <li>In the Image component, assign your game icon to the Source Image field.</li>
                    <li>Click Add Component again.</li>
                    <li>Search for and add <code className="text-blue-500">Button</code> component.</li>
                  </ul>
                </li>
              </ol>
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex items-start gap-4">
                <span className="text-2xl mt-1">✨</span>
                <p className="text-zinc-800 dark:text-blue-200 text-sm font-medium">
                  <strong>Tip:</strong> You can adjust the button&apos;s position and size using the Rect Transform component in the Inspector.
                </p>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section id="step-4" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-4 tracking-tighter">
              <span className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20">4</span>
              Import WebView Custom Package
            </h2>
            <div className="ml-14 space-y-6">
              <ol className="list-decimal list-inside space-y-3 text-zinc-800 dark:text-zinc-400 text-lg font-medium">
                <li>In the Unity menu bar, go to Assets → Import Package → Custom Package.</li>
                <li>Navigate to the location of your WebView custom package (.unitypackage file).</li>
                <li>Select the package file and click Open.</li>
                <li>In the Import Unity Package dialog, ensure all items are checked.</li>
                <li>Click Import button.</li>
                <li>Wait for Unity to import and compile all package files.</li>
              </ol>
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-4">
                <span className="text-2xl mt-1">⚠️</span>
                <p className="text-zinc-800 dark:text-red-200 text-sm font-medium">
                  <strong>Important:</strong> Do not modify the package folder structure after import to maintain proper dependencies.
                </p>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section id="step-5" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-4 tracking-tighter">
              <span className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20">5</span>
              Setup WebView Script and Game Controller
            </h2>
            <div className="ml-14 space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">Import WebView Script Folder</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-800 dark:text-zinc-400 font-medium ml-4">
                  <li>Locate the WebView script folder (provided separately).</li>
                  <li>Drag and drop the entire WebView script folder into the Assets folder.</li>
                  <li>Wait for Unity to import and compile all scripts.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">Create GameControllerWindow GameObject</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-800 dark:text-zinc-400 font-medium ml-4">
                  <li>In the Hierarchy window, right-click on the Canvas.</li>
                  <li>Select Create Empty.</li>
                  <li>Rename this new GameObject to <code className="text-blue-600 font-bold">[GameControllerWindow]</code>.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">Attach Script to GameControllerWindow</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-800 dark:text-zinc-400 font-medium ml-4">
                  <li>Select <code className="text-blue-600 font-bold">[GameControllerWindow]</code> in the Hierarchy.</li>
                  <li>From the Project window, locate the WebView script file.</li>
                  <li>Drag and drop the script onto the Inspector panel of <code className="text-blue-600 font-bold">[GameControllerWindow]</code>.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">Configure Banner Button Reference</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-800 dark:text-zinc-400 font-medium ml-4">
                  <li>Look at the WebView script component in the Inspector.</li>
                  <li>Locate the <strong>Banner Button</strong> field.</li>
                  <li>Drag and drop the <code className="text-blue-600 font-bold">[WebsiteButton]</code> into this field.</li>
                </ul>
              </div>

              <div className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white flex items-center gap-2 tracking-tighter">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Implementation Script
                </h3>
                <p className="text-zinc-950 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  You can use the following C# snippet as a reference for your <code className="text-blue-500 font-bold">GameController</code> or
                  <code className="text-blue-500 font-bold">WebViewManager</code> script. This handles the click event and launches the Unique Link.
                </p>
                <CodeBlock
                  code={`using UnityEngine;\nusing UnityEngine.UI;\n\npublic class SnappGamesHandler : MonoBehaviour\n{\n    public Button snappgamesButton;\n    private string gameUrl = "https://snappgames.com/?id=44";\n\n    void Start()\n    {\n        if (snappgamesButton != null)\n        {\n            snappgamesButton.onClick.AddListener(OpenWebView);\n        }\n    }\n\n    void OpenWebView()\n    {\n        // Trigger your WebView component here\n        // Example: WebView.Open(gameUrl);\n        Debug.Log("Launching SnappGames: " + gameUrl);\n        Application.OpenURL(gameUrl); // Fallback to browser if needed\n    }\n}`}
                  language="csharp"
                  filename="SnappGamesHandler.cs"
                />
              </div>

              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-4 shadow-sm">
                <span className="text-2xl mt-1">🛑</span>
                <p className="text-zinc-800 dark:text-red-200 text-sm font-medium">
                  <strong>Important:</strong> The [WebsiteButton] must be properly assigned to the Banner Button field for the WebView to function correctly.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 mb-12">
          <Link href="/android-cct" className="flex items-center gap-2 text-zinc-800 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Android (CCT)
          </Link>
          {/* <Link href="/api/auth" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold text-right">
            Authentication Reference
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link> */}
        </div>
      </div>
    </DocsLayout>
  );
}
