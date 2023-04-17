import { Settings } from "./../db/index";
const cn = {
  Home: {
    NewChat: "新的聊天",
    NewPrompt: "新的提示",
    Chats: "聊天",
    Prompts: "提示",
  },
  Features: {
    MainDescription: "一个基于各种专业提示的ChatGPT应用",
    Badge: "GPT-4 就绪",
    Title1: "免费开源",
    Title2: "注重隐私",
    Title3: "最佳体验",
    Description1: "该应用是免费提供的，源代码可在 GitHub 上找到。",
    Description2: "不会收集任何个人信息，您的所有数据都存储在本地。",
    Description3: "用爱和关怀精心打造，以提供最佳体验。",
  },
  ModalItem: {
    Edit: "编辑",
    Delete: "删除",
  },
  Group: {
    DarkMode: "暗黑模式",
    LightMode: "明亮模式",
    Database: "数据",
    SourceCode: "源代码",
    Twitter: "推特",
    Feedback: "反馈",
    Settings: "设置",
  },
  Database: {
    Title: "数据",
    Chats: "聊天",
    Prompts: "提示",
    Messages: "消息",
    Export: "导出数据",
    Import: "导入数据",
    DeleteChats: "删除全部聊天",
    DeleteAll: "删除全部数据",
  },
  Settings: {
    Title: "设置",
    GetKey: "获取你的OpenAI Key",
    Prompt: "API Key仅仅用于与OpenAI API进行通信，不会被存储在任何地方。",
    Warning: "警告",
    WarningDescription:
      "显示的成本尚未更新每个模型的成本，现在它将始终显示 GPT-3.5 的成本。",
  },
  Alert: {
    Save: "保存",
    Delete: "删除",
    CreatePrompt: "创建提示",
    EditPrompt: "编辑提示",
    DeletePrompt: "删除提示",
    EditChat: "编辑聊天",
    DeleteChat: "删除聊天",
    DeleteData: "删除数据",
    DeleteChatConfirm: "您确定要删除此聊天吗？",
    DeleteChatsConfirm: "您确定要删除所有聊天吗？",
    DeletePromptConfirm: "您确定要删除此提示吗？",
    DeleteAllConfirm: "您确定要删除全部数据吗？",
  },
  Notification: {
    Error: "错误",
    Saved: "已保存",
    SavedKey: "OpenAI Key 已保存",
    CreatedPrompt: "提示已创建",
    NetworkError: "网络连接错误",
    Export: "导出",
    Exported: "数据已导出",
    Import: "导入",
    Imported: "数据已导入",
    InvalidFile: "无效的文件",
    Deleted: "已删除",
    DeletedChat: "聊天已删除",
    DeleteChatError: "无法删除聊天，请刷新页面后重试",
    DeletedPrompt: "提示已删除",
    DeletePromptError: "无法删除提示，请刷新页面后重试",
    UpdatedPrompt: "提示已更新",
    NoChatError: "无法找到聊天，请创建一个新的聊天",
    NoKeyError: "请先设置 OpenAI Key",
  },
  Chat: {
    Character: "角色",
    Tone: "语气",
    Style: "风格",
    Format: "格式",
    Prompt: {
      Default: "你是ChatGPT，OpenAI训练的大型语言模型。",
      Character: "你是{character}。",
      Tone: "用{tone}语气说话。",
      Style: "用{style}风格说话。",
    },
  },
  writingCharacters: [
    {
      label: "喜剧演员",
      value: "通过讲笑话和幽默故事来娱乐观众的表演者。",
    },
    {
      label: "生活教练",
      value: "专业帮助个人确定并实现自己的个人和职业目标的专业人士。",
    },
    {
      label: "职业顾问",
      value: "帮助个人探索和选择职业、制定求职策略和提高工作表现的专业人士。",
    },
    {
      label: "营养师",
      value: "专业研究营养及其对身体的影响的健康专业人士。",
    },
    {
      label: "产品经理",
      value: "负责公司产品开发和市场营销的专业人士。",
    },
    {
      label: "私人教练",
      value:
        "与个人合作制定个性化的锻炼计划并提高整体健康和身体健康的健身专业人士。",
    },
    {
      label: "生活黑客",
      value: "使用非传统方法解决日常生活中的问题并提高生产力的人。",
    },
    {
      label: "旅游顾问",
      value: "帮助个人计划和预订旅行安排的专业人士。",
    },
    {
      label: "正念教练",
      value: "帮助个人发展正念实践，以减轻压力并改善幸福感的专业人士。",
    },
    {
      label: "理财顾问",
      value: "提供财务规划、投资策略和退休计划的指导和建议的专业人士。",
    },
    {
      label: "语言导师",
      value: "帮助个人学习和提高语言技能的教师。",
    },
    {
      label: "旅游指南",
      value: "领导旅游、提供当地景点和文化信息的专业人士。",
    },
    {
      label: "营销专家",
      value: "制定和实施市场营销策略以推广产品和服务的专业人士。",
    },
    {
      label: "软件开发人员",
      value: "设计、开发和维护软件应用和系统的专业人士。",
    },
    {
      label: "约会教练",
      value: "帮助个人改善约会和恋爱技能的专业人士。",
    },
    {
      label: "DIY专家",
      value: "熟练完成各种家庭自助项目的人。",
    },
    {
      label: "记者",
      value: "调查并报道最新事件和新闻故事的专业人士。",
    },
    {
      label: "技术作家",
      value: "为各种受众编写有关技术及相关话题的专业人士。",
    },
    {
      label: "专业厨师",
      value: "熟练的烹饪专业人士，负责准备餐点和管理厨房运营。",
    },
    {
      label: "专业销售人员",
      value: "向企业和消费者销售产品和服务的专业人士。",
    },
    {
      label: "初创科技律师",
      value: "专门为初创科技公司提供法律建议和服务的法律专业人士。",
    },
    {
      label: "平面设计师",
      value: "设计标志、手册和网站等视觉材料的专业人士。",
    },
    {
      label: "学术研究员",
      value: "在特定学术领域开展研究并产生学术作品的专业人士。",
    },
    {
      label: "客户支持代理",
      value: "为有问题或疑问的客户提供帮助和支持的专业人士。",
    },
    {
      label: "人力资源顾问",
      value: "为组织提供人力资源管理和战略方面的指导和建议的专业人士。",
    },
  ],
  writingTones: [
    "自信的",
    "权威的",
    "随意的",
    "有信心的",
    "居高临下的",
    "对话式的",
    "外交的",
    "直截了当的",
    "雄辩的",
    "正式的",
    "友好的",
    "幽默的",
    "信息丰富的",
    "激励人心的",
    "强烈的",
    "易怒的",
    "开玩笑的",
    "有礼貌的",
    "讽刺的",
    "诚挚的",
    "舒缓的",
    "严厉的",
    "同情的",
    "委婉的",
    "风趣的",
  ],
  writingStyles: [
    "学术的",
    "分析性的",
    "辩证性的",
    "交谈式的",
    "创意性的",
    "挑剔性的",
    "描述性的",
    "说明性的",
    "信息性的",
    "指导性的",
    "调查性的",
    "新闻性的",
    "比喻性的",
    "叙事性的",
    "说服性的",
    "诗意化的",
    "讽刺性的",
    "技术性的",
  ],
  writingFormats: [
    { value: "尽可能简明扼要地回答", label: "简明扼要" },
    { value: "循序渐进地回答", label: "循序渐进" },
    { value: "详细地回答", label: "极度详细" },
    {
      value: "用五岁孩子听得懂的语言解释",
      label: "用五岁孩子听得懂的语言解释",
    },
  ],
};

export type LocaleType = typeof cn;

export default cn;
