import boundaries from "eslint-plugin-boundaries";

export const eslintBoundariesConfig = {
    plugins: {
        boundaries,
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },

        "boundaries/elements": [
            { type: "app", pattern: "src/app" },
            { type: "pages", pattern: "src/pages" },
            { type: "widgets", pattern: "src/widgets" },
            { type: "features", pattern: "src/features/*" },
            { type: "entities", pattern: "src/entities/*" },
            { type: "shared", pattern: "src/shared" },
        ],
    },

    rules: {
        "boundaries/element-types": [
            2,
            {
                default: "allow",
                rules: [
                    {
                        from: "shared",
                        disallow: ["app", "pages", "widgets", "features", "entities"],
                        message:
                            "Нижний слой (${file.type}) не может импортировать верхний (${dependency.type})",
                    },
                    {
                        from: "entities",
                        disallow: ["app", "pages", "widgets", "features"],
                        message:
                            "Нижний слой (${file.type}) не может импортировать верхний (${dependency.type})",
                    },
                    {
                        from: "features",
                        disallow: ["app", "pages", "widgets"],
                        message:
                            "Нижний слой (${file.type}) не может импортировать верхний (${dependency.type})",
                    },
                    {
                        from: "widgets",
                        disallow: ["app", "pages"],
                        message:
                            "Нижний слой (${file.type}) не может импортировать верхний (${dependency.type})",
                    },
                ],
            },
        ],

        "boundaries/entry-point": [
            2,
            {
                default: "disallow",
                message:
                    "Импорт из модуля ${dependency.source} запрещён. Используй public API (обычно index.ts)",

                rules: [
                    {
                        target: ["entities", "features", "widgets"],
                        allow: ["index.ts", "index.tsx"],
                    },
                    {
                        target: ["app", "pages", "shared"],
                        allow: "**",
                    },
                ],
            },
        ],
    },
};