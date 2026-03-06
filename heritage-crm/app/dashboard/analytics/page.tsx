export default function AnalyticsPage() {
    return (
        <div className="p-8 h-full flex flex-col">
            <h1 className="text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-6">
                Analytics
            </h1>
            <div className="flex-1 min-h-0 bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm overflow-hidden">
                <iframe
                    src="https://lookerstudio.google.com/embed/reporting/91d33933-2818-41e1-8018-4c6a04b377ce/page/UvHrF"
                    className="w-full h-full border-0"
                    style={{ minHeight: 'calc(100vh - 10rem)' }}
                    allowFullScreen
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                />
            </div>
        </div>
    )
}
