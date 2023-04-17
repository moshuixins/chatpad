import type { LocaleType } from "./index";

const en: LocaleType = {
  Home: {
    NewChat: "New Chat",
    NewPrompt: "New Prompt",
    Chats: "Chats",
    Prompts: "Prompts",
  },
  Features: {
    MainDescription:
      "A ChatGPT interface designed for injecting tech-specific prompts.",
    Badge: "GPT-4 READY",
    Title1: "Free and open source",
    Title2: "Privacy focused",
    Title3: "Best experience",
    Description1:
      "This app is provided for free and the source code is available on GitHub.",
    Description2:
      "No tracking, no cookies, no bullshit. All your data is stored locally.",
    Description3:
      "Crafted with love and care to provide the best experience possible.",
  },
  ModalItem: {
    Edit: "Edit",
    Delete: "Delete",
  },
  Group: {
    DarkMode: "Dark Mode",
    LightMode: "Light Mode",
    Database: "Database",
    SourceCode: "Source Code",
    Twitter: "Follow on Twitter",
    Feedback: "Give Feedback",
    Settings: "Settings",
  },
  Database: {
    Title: "Database",
    Chats: "Chats",
    Prompts: "Prompts",
    Messages: "Messages",
    Export: "Export Data",
    Import: "Import Data",
    DeleteChats: "Delete Chats",
    DeleteAll: "Delete All Data",
  },
  Settings: {
    Title: "Settings",
    GetKey: "Get your OpenAI Key",
    Prompt:
      "The API Key is stored locally on your browser and never sent anywhere else.",
    Warning: "Warning",
    WarningDescription:
      "The displayed cost was not updated yet to reflect the costs for each model. Right now it will always show the cost for GPT-3.5.",
  },
  Alert: {
    Save: "Save",
    Delete: "Delete",
    CreatePrompt: "Create Prompt",
    EditPrompt: "Edit Prompt",
    DeletePrompt: "Delete Prompt",
    EditChat: "Edit Chat",
    DeleteChat: "Delete Chat",
    DeleteData: "Delete Data",
    DeleteChatConfirm: "Are you sure you want to delete this chat?",
    DeleteChatsConfirm: "Are you sure you want to delete your chats?",
    DeleteAllConfirm: "Are you sure you want to delete your data?",
    DeletePromptConfirm: "Are you sure you want to delete this prompt?",
  },
  Notification: {
    Error: "Error",
    Saved: "Saved",
    SavedKey: "Your OpenAI Key has been saved.",
    CreatedPrompt: "Prompt created",
    NetworkError: "No internet connection.",
    Export: "Exporting Data",
    Exported: "Your data is being exported.",
    Import: "Importing Data",
    Imported: "Your data is being imported.",
    InvalidFile: "The file you selected is invalid",
    Deleted: "Deleted",
    DeletedChat: "Chat deleted",
    DeleteChatError:
      "Can't remove chat. Please refresh the page and try again.",
    DeletedPrompt: "Prompt deleted",
    DeletePromptError:
      "Can't remove prompt. Please refresh the page and try again.",
    UpdatedPrompt: "Prompt updated",
    NoChatError: "chatId is not defined. Please create a chat to get started.",
    NoKeyError: "OpenAI API Key is not defined. Please set your API Key",
  },
  Chat: {
    Character: "Character",
    Tone: "Tone",
    Style: "Style",
    Format: "Format",
    Prompt: {
      Default: "You are ChatGPT, a large language model trained by OpenAI.",
      Character: "You are {character}.",
      Tone: "Respond in {tone} tone.",
      Style: "Respond in {style} style.",
    },
  },
  writingCharacters: [
    {
      label: "Standup Comedian",
      value:
        "A performer who entertains audiences by telling jokes and humorous stories.",
    },
    {
      label: "Life Coach",
      value:
        "A professional who helps individuals identify and achieve their personal and professional goals.",
    },
    {
      label: "Career Counselor",
      value:
        "A professional who helps individuals explore and choose careers, develop job search strategies, and improve job performance.",
    },
    {
      label: "Nutritionist",
      value:
        "A health professional who specializes in the study of nutrition and its effects on the body.",
    },
    {
      label: "Product Manager",
      value:
        "A professional who oversees the development and marketing of a company's products.",
    },
    {
      label: "Personal Trainer",
      value:
        "A fitness professional who works with individuals to develop personalized exercise programs and improve their overall health and fitness.",
    },
    {
      label: "Life Hacker",
      value:
        "A person who uses unconventional methods to solve problems and increase productivity in everyday life.",
    },
    {
      label: "Travel Advisor",
      value:
        "A professional who helps individuals plan and book travel arrangements.",
    },
    {
      label: "Mindfulness Coach",
      value:
        "A professional who helps individuals develop mindfulness practices to reduce stress and improve well-being.",
    },
    {
      label: "Financial Advisor",
      value:
        "A professional who provides guidance and advice on financial planning, investment strategies, and retirement planning.",
    },
    {
      label: "Language Tutor",
      value:
        "A teacher who helps individuals learn and improve their language skills.",
    },
    {
      label: "Travel Guide",
      value:
        "A professional who leads tours and provides information about local attractions and culture.",
    },
    {
      label: "Marketing Expert",
      value:
        "A professional who develops and implements marketing strategies to promote products and services.",
    },
    {
      label: "Software Developer",
      value:
        "A professional who designs, develops, and maintains software applications and systems.",
    },
    {
      label: "Dating Coach",
      value:
        "A professional who helps individuals improve their dating and relationship skills.",
    },
    {
      label: "DIY Expert",
      value:
        "A person who is skilled at completing a wide range of do-it-yourself projects around the home.",
    },
    {
      label: "Journalist",
      value:
        "A professional who investigates and reports on current events and news stories.",
    },
    {
      label: "Tech Writer",
      value:
        "A professional who writes about technology and related topics for a variety of audiences.",
    },
    {
      label: "Professional Chef",
      value:
        "A skilled culinary professional who prepares meals and manages kitchen operations.",
    },
    {
      label: "Professional Salesperson",
      value:
        "A professional who sells products and services to businesses and consumers.",
    },
    {
      label: "Startup Tech Lawyer",
      value:
        "A legal professional who specializes in providing legal advice and services to startup technology companies.",
    },
    {
      label: "Graphic Designer",
      value:
        "A professional who designs visual materials such as logos, brochures, and websites.",
    },
    {
      label: "Academic Researcher",
      value:
        "A professional who conducts research and produces scholarly work in a particular academic field.",
    },
    {
      label: "Customer Support Agent",
      value:
        "A professional who provides assistance and support to customers who have questions or problems with a company's products or services.",
    },
    {
      label: "HR Consultant",
      value:
        "A professional who provides guidance and advice to organizations on human resource management and strategy",
    },
  ],
  writingTones: [
    "Assertive",
    "Authoritative",
    "Casual",
    "Confident",
    "Condescending",
    "Conversational",
    "Diplomatic",
    "Direct",
    "Eloquent",
    "Formal",
    "Friendly",
    "Humorous",
    "Informative",
    "Inspiring",
    "Intense",
    "Irritable",
    "Joking",
    "Polite",
    "Sarcastic",
    "Sincere",
    "Soothing",
    "Stern",
    "Sympathetic",
    "Tactful",
    "Witty",
  ],
  writingStyles: [
    "Academic",
    "Analytical",
    "Argumentative",
    "Conversational",
    "Creative",
    "Critical",
    "Descriptive",
    "Explanatory",
    "Informative",
    "Instructive",
    "Investigative",
    "Journalistic",
    "Metaphorical",
    "Narrative",
    "Persuasive",
    "Poetic",
    "Satirical",
    "Technical",
  ],
  writingFormats: [
    { value: "Answer as concise as possible", label: "Concise" },
    { value: "Think step-by-step", label: "Step-by-step" },
    { value: "Answer in painstakingly detail", label: "Extreme Detail" },
    { value: "Explain like I'm five", label: "Explain Like I'm Five" },
  ],
};

export default en;
