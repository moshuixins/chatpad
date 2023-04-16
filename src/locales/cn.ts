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
  Alert: {
    Save: "保存",
    Delete: "删除",
    CreatePrompt: "创建提示",
    EditChat: "编辑聊天",
    DeleteChat: "删除聊天",
    DeleteChatConfirm: "您确定要删除此聊天吗？",
    DeleteChatsConfirm: "您确定要删除所有聊天吗？",
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
  },
  writingCharacters: [
    {
      label: "无代码构建者",
      value:
        "使用可视化开发工具和预置组件而无需编写代码创建应用程序、网站和其他软件产品的专业人员。",
    },
    {
      label: "前端开发人员",
      value: "使用HTML、CSS和JavaScript设计和开发网站和应用程序的专业人员。",
    },
    {
      label: "后端开发人员",
      value:
        "使用Node.js、Python和Ruby on Rails等技术构建和维护网站和应用程序的服务器端的专业人员。",
    },
    {
      label: "全栈开发人员",
      value:
        "能够处理从数据库设计到用户界面开发的网站和应用程序的前端和后端工作的专业人员。",
    },
    {
      label: "Webflow开发者",
      value:
        "使用Webflow设计和开发网站的专业人员，Webflow是一款可视化开发平台，可以实现高级定制而无需编码技能。",
    },
    {
      label: "软件开发人员",
      value: "设计、开发和维护软件应用程序和系统的专业人员。",
    },
    {
      label: "用户体验设计师",
      value:
        "使用研究、线框和原型设计技术为网站和应用程序设计用户体验的专业人员，以创建直观的界面。",
    },
    {
      label: "用户界面设计师",
      value:
        "为网站和应用程序设计用户界面的视觉元素的专业人员，使用Adobe XD、Sketch和Figma等工具。",
    },
    {
      label: "网页设计师",
      value:
        "使用Adobe Photoshop、Sketch和Figma等工具为网站设计布局、色彩方案、排版和用户界面等视觉方面的专业人员。",
    },
    {
      label: "产品设计师",
      value:
        "为产品设计整体用户体验的专业人员，包括外观效果、用户界面和交互设计等方面，使用Sketch、Figma和InVision等工具。",
    },
    {
      label: "产品经理",
      value: "监督公司产品的开发和营销的专业人员。",
    },
    {
      label: "市场营销专家",
      value: "制定和执行营销策略来促进产品和服务推广的专业人员。",
    },
    {
      label: "增长黑客",
      value:
        "使用创意和分析性营销技术通过社交媒体、电子邮件和SEO等渠道快速增加产品或服务的用户和收入的专业人员。",
    },
    {
      label: "SEO专家",
      value:
        "优化网站和内容以提高它们在搜索引擎结果页面上的可见性和排名的专业人员，使用关键字研究、链接建设和内容优化等技术。",
    },
    {
      label: "技术作家",
      value: "为各种受众编写有关技术及相关主题的专业人员。",
    },
    {
      label: "文案策划师",
      value:
        "为网站、营销材料和其他媒体撰写文案的专业人员，使用说服性语言和叙事技巧来吸引和转化受众。",
    },
    {
      label: "数据科学家",
      value:
        "使用统计学和机器学习技术分析大量数据并为业务决策提供洞察的专业人员。",
    },
    {
      label: "机器学习工程师",
      value:
        "设计、构建和维护使用机器学习算法改进自动化、准确性和决策制定的系统的专业人员。",
    },
    {
      label: "数据库管理员",
      value: "为组织管理和维护数据库，确保数据完整性、安全和可用性的专业人员。",
    },
    {
      label: "系统管理员",
      value: "安装、配置和维护支持组织IT系统的硬件和软件基础架构的专业人员。",
    },
    {
      label: "网络工程师",
      value:
        "为组织设计、实施和维护计算机网络，确保连接性、安全性和性能的专业人员。",
    },
    {
      label: "网络安全分析师",
      value:
        "通过监控网络、识别漏洞和实施安全措施保护组织免受网络攻击的专业人员。",
    },
    {
      label: "DevOps工程师",
      value: "结合软件开发和IT运营，以简化软件应用程序的部署和管理的专业人员。",
    },
    {
      label: "云架构师",
      value:
        "为组织设计和监督云计算解决方案的实施，使用AWS、Azure和Google Cloud等平台的专业人员。",
    },
    {
      label: "初创科技律师",
      value: "专注于为初创科技公司提供法律咨询和服务的法律专业人员。",
    },
    {
      label: "移动应用程序开发人员",
      value:
        "使用Java、Kotlin、Swift和React Native等语言设计和开发移动设备应用程序的专业人员。",
    },
    {
      label: "游戏开发人员",
      value:
        "使用Unity和Unreal Engine等游戏引擎以及C++和C#等编程语言设计和开发视频游戏的专业人员。",
    },
  ],
  writingTones: [
    "确定性的",
    "专业的",
    "交谈式的",
    "幽默的",
    "技术的",
    "激励性的",
    "教育性的",
    "鼓舞人心的",
    "有说服力的",
    "断言性的",
    "分析性的",
    "乐观的",
    "挑剔的",
    "有创造力的",
    "协作性的",
    "权威性的",
    "好奇心的",
    "具有共情力的",
    "深思熟虑的",
    "信息性的",
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
    { value: "像我五岁一样解释", label: "像我五岁一样解释" },
  ],
};

export type LocaleType = typeof cn;

export default cn;
