import React, { createContext, useContext, useState } from "react";

const translations = {
    fr: {
        overview: "Aperçu",
        find_patient: "Trouver le dossier du patient",
        scheduled_tasks: "Tâches planifiées",
        add_task: "Ajouter une tâche",
        last_test: "Dernier test planifié",
        patient: "Patient",
        phone: "Téléphone",
        type_analyse: "Type d'analyse",
        date: "Date",
        state: "État",
        action: "Action",
        planned: "Planifié",
        // ...add more keys as needed
    },
    ar: {
        overview: "نظرة عامة",
        find_patient: "البحث عن ملف المريض",
        scheduled_tasks: "المهام المجدولة",
        add_task: "إضافة مهمة",
        last_test: "آخر اختبار مجدول",
        patient: "المريض",
        phone: "الهاتف",
        type_analyse: "نوع التحليل",
        date: "التاريخ",
        state: "الحالة",
        action: "إجراء",
        planned: "مجدول",
        // ...add more keys as needed
    }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
    const [lang, setLang] = useState("fr");
    const t = (key) => translations[lang][key] || key;
    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    return useContext(I18nContext);
}