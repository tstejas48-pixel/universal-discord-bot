export const BOT_VERSIONS = [
  {
    version: "v1.0",
    title: "Core Basics",
    color: "from-purple-600 to-purple-800",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    icon: "🚀",
    commands: [
      { name: "/ping", description: "Check if the bot is alive and measure latency", example: "/ping → 🏓 Pong! Latency: 42ms" },
      { name: "/hello", description: "Greet the bot and get a personalized welcome", example: "/hello → 👋 Hello, Tejas! Welcome to TejasBot!" },
      { name: "/help", description: "Display all available commands and descriptions", example: "/help → Shows command list embed" },
    ],
  },
  {
    version: "v2.0",
    title: "Server Info",
    color: "from-indigo-600 to-indigo-800",
    badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    icon: "🔍",
    commands: [
      { name: "/serverinfo", description: "Display detailed server statistics and info", example: "/serverinfo → Members: 1,234 | Roles: 15 | Channels: 42" },
      { name: "/userinfo", description: "View profile info for any server member", example: "/userinfo @user → Joined: Jan 1, 2024 | Roles: 5" },
      { name: "/avatar", description: "Get the full-size avatar of any user", example: "/avatar @user → Full resolution avatar image" },
    ],
  },
  {
    version: "v3.0",
    title: "Fun & Games",
    color: "from-pink-600 to-rose-700",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    icon: "🎮",
    commands: [
      { name: "/8ball", description: "Ask the magic 8-ball a question", example: "/8ball Will I pass? → 🎱 It is certain!" },
      { name: "/coinflip", description: "Flip a virtual coin — heads or tails", example: "/coinflip → 🪙 Heads!" },
      { name: "/dice", description: "Roll a dice with customizable sides", example: "/dice sides:20 → 🎲 You rolled: 17!" },
      { name: "/rps", description: "Play rock-paper-scissors against the bot", example: "/rps choice:rock → ✌️ Bot chose Scissors! You win!" },
    ],
  },
  {
    version: "v4.0",
    title: "Moderation",
    color: "from-red-600 to-orange-700",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    icon: "🛡️",
    commands: [
      { name: "/clear", description: "Bulk delete messages from a channel", example: "/clear amount:50 → 🗑️ Cleared 50 messages!" },
      { name: "/kick", description: "Remove a member from the server", example: "/kick @user reason:Spam → ⚡ Kicked successfully" },
      { name: "/ban", description: "Permanently ban a user from the server", example: "/ban @user reason:Harassment → 🔨 Banned!" },
      { name: "/warn", description: "Issue a warning to a server member", example: "/warn @user reason:Spam → ⚠️ Warning issued (1/3)" },
    ],
  },
  {
    version: "v5.0",
    title: "Welcome System",
    color: "from-green-600 to-emerald-700",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: "👋",
    commands: [
      { name: "on_member_join", description: "Auto-send a custom welcome embed when a user joins", example: "🎉 Welcome @NewUser to the server! You are member #1,234!" },
      { name: "on_member_remove", description: "Post a farewell message when a user leaves", example: "👋 Goodbye @User — we'll miss you!" },
    ],
  },
  {
    version: "v6.0",
    title: "XP & Levels",
    color: "from-yellow-600 to-amber-700",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    icon: "⭐",
    commands: [
      { name: "/rank", description: "View your current XP and level ranking", example: "/rank → Level 12 | XP: 2,450 / 3,000 | Rank: #5" },
      { name: "/leaderboard", description: "See the top 10 XP earners in the server", example: "/leaderboard → Top 10 ranked members" },
      { name: "XP on message", description: "Earn 15–25 XP for every message (60s cooldown)", example: "🎉 Level up! @User reached Level 13!" },
    ],
  },
  {
    version: "v7.0",
    title: "Server Logging",
    color: "from-cyan-600 to-teal-700",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon: "📋",
    commands: [
      { name: "Member Join/Leave", description: "Log all member joins and departures to a log channel", example: "📥 @User joined at 3:42 PM" },
      { name: "Message Deleted", description: "Log deleted messages with content and author", example: "🗑️ Message by @User deleted in #general" },
      { name: "Warn/Kick/Ban Logs", description: "Log all moderation actions with reason and moderator", example: "⚠️ @Mod warned @User — Reason: Spam" },
    ],
  },
];

export const SETUP_STEPS = [
  {
    step: 1,
    title: "Create Discord Application",
    icon: "🔧",
    description: "Go to the Discord Developer Portal and create a new application.",
    details: [
      "Visit discord.com/developers/applications",
      "Click 'New Application' → name it TejasBot",
      "Go to the Bot tab → Click 'Add Bot'",
      "Enable: Server Members Intent + Message Content Intent",
      "Copy your Bot Token (keep it secret!)",
    ],
  },
  {
    step: 2,
    title: "Invite Bot to Server",
    icon: "🤖",
    description: "Generate an OAuth2 URL to invite the bot to your server.",
    details: [
      "Go to OAuth2 → URL Generator tab",
      "Select scopes: bot + applications.commands",
      "Select permissions: Administrator (for testing)",
      "Copy the generated URL and open it",
      "Select your server and click Authorize",
    ],
  },
  {
    step: 3,
    title: "Set Up VS Code Project",
    icon: "💻",
    description: "Create the project folder and install all dependencies.",
    details: [
      "Create folder: mkdir TejasBot && cd TejasBot",
      "Create virtual env: python -m venv venv",
      "Activate: source venv/bin/activate (Mac/Linux) or venv\\Scripts\\activate (Windows)",
      "Install packages: pip install discord.py python-dotenv",
      "Create .env file and add your DISCORD_TOKEN",
    ],
  },
  {
    step: 4,
    title: "Create Project Files",
    icon: "📁",
    description: "Set up the project structure with all required files.",
    details: [
      "Create bot.py — the main entry point",
      "Create config.py — loads environment variables",
      "Create commands/ folder with moderation.py, fun.py, levels.py",
      "Create events/ folder with welcome.py and logging.py",
      "Create database/ folder with database.py for SQLite",
    ],
  },
  {
    step: 5,
    title: "Configure & Run",
    icon: "▶️",
    description: "Set your token and run the bot for the first time.",
    details: [
      "Add DISCORD_TOKEN=your_token_here to .env",
      "Run: python bot.py",
      "See 'TejasBot is ready!' in the console",
      "Test /ping in Discord — bot should respond!",
      "Upload to GitHub using provided instructions",
    ],
  },
];

export const PROJECT_FILES: Record<string, { filename: string; language: string; code: string }> = {
  "bot.py": {
    filename: "bot.py",
    language: "python",
    code: `# ============================================================
# TejasBot - Multi-Purpose Discord Server Management Bot
# Main entry point: bot.py
# ============================================================

import discord
from discord.ext import commands
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")

# ─── Bot Setup ───────────────────────────────────────────────
# Define the intents (permissions) our bot needs
intents = discord.Intents.default()
intents.members = True           # Track member joins/leaves
intents.message_content = True   # Read message content for XP system

# Create the bot with command prefix and intents
bot = commands.Bot(command_prefix="!", intents=intents)

# ─── Load All Cogs (Command Modules) ─────────────────────────
async def load_extensions():
    """Load all command and event cogs."""
    extensions = [
        "commands.utility",    # /ping, /hello, /help
        "commands.moderation", # /clear, /kick, /ban, /warn
        "commands.fun",        # /8ball, /coinflip, /dice, /rps
        "commands.levels",     # XP & level system
        "events.welcome",      # Welcome/farewell messages
        "events.logging",      # Server action logger
    ]
    for ext in extensions:
        try:
            await bot.load_extension(ext)
            print(f"✅ Loaded: {ext}")
        except Exception as e:
            print(f"❌ Failed to load {ext}: {e}")

# ─── Bot Ready Event ─────────────────────────────────────────
@bot.event
async def on_ready():
    """Called when bot successfully connects to Discord."""
    print(f"\\n{'='*40}")
    print(f"🤖 TejasBot is ready!")
    print(f"📌 Logged in as: {bot.user}")
    print(f"🌐 Servers: {len(bot.guilds)}")
    print(f"{'='*40}\\n")

    # Set bot activity status
    activity = discord.Activity(
        type=discord.ActivityType.watching,
        name="/help | TejasBot"
    )
    await bot.change_presence(activity=activity)

    # Sync slash commands with Discord
    try:
        synced = await bot.tree.sync()
        print(f"⚡ Synced {len(synced)} slash commands!")
    except Exception as e:
        print(f"❌ Sync failed: {e}")

# ─── Main Entry Point ────────────────────────────────────────
async def main():
    async with bot:
        await load_extensions()
        await bot.start(TOKEN)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())`,
  },

  "config.py": {
    filename: "config.py",
    language: "python",
    code: `# ============================================================
# config.py - Central configuration for TejasBot
# All settings and constants are stored here
# ============================================================

import os
from dotenv import load_dotenv

load_dotenv()

# ─── Bot Settings ────────────────────────────────────────────
DISCORD_TOKEN = os.getenv("DISCORD_TOKEN")
BOT_PREFIX = "!"
BOT_VERSION = "1.0.0"

# ─── Channel IDs (replace with your actual channel IDs) ──────
WELCOME_CHANNEL_ID = int(os.getenv("WELCOME_CHANNEL_ID", "0"))
LOG_CHANNEL_ID = int(os.getenv("LOG_CHANNEL_ID", "0"))

# ─── XP System Settings ──────────────────────────────────────
XP_PER_MESSAGE_MIN = 15     # Minimum XP per message
XP_PER_MESSAGE_MAX = 25     # Maximum XP per message
XP_COOLDOWN_SECONDS = 60    # Seconds between XP gains

def xp_for_level(level: int) -> int:
    """Calculate total XP needed to reach a given level."""
    return 5 * (level ** 2) + 50 * level + 100

# ─── Color Constants (for embeds) ────────────────────────────
COLOR_SUCCESS = 0x57F287   # Green
COLOR_ERROR   = 0xED4245   # Red
COLOR_INFO    = 0x5865F2   # Discord blurple
COLOR_WARNING = 0xFEE75C   # Yellow
COLOR_LOG     = 0x99AAB5   # Gray

# ─── Moderation Settings ─────────────────────────────────────
MAX_WARNINGS_BEFORE_KICK = 3  # Auto-kick after 3 warnings
MAX_CLEAR_AMOUNT = 100        # Max messages /clear can delete`,
  },

  "commands/utility.py": {
    filename: "commands/utility.py",
    language: "python",
    code: `# ============================================================
# commands/utility.py - Basic utility slash commands
# Commands: /ping, /hello, /help, /serverinfo, /userinfo, /avatar
# ============================================================

import discord
from discord import app_commands
from discord.ext import commands
import time
from config import COLOR_INFO, COLOR_SUCCESS

class Utility(commands.Cog):
    """Basic utility commands for all users."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ─── /ping ───────────────────────────────────────────────
    @app_commands.command(name="ping", description="Check bot latency")
    async def ping(self, interaction: discord.Interaction):
        """Measures WebSocket latency and response time."""
        start = time.perf_counter()
        await interaction.response.defer()
        end = time.perf_counter()

        ws_latency = round(self.bot.latency * 1000)
        api_latency = round((end - start) * 1000)

        embed = discord.Embed(
            title="🏓 Pong!",
            color=COLOR_SUCCESS
        )
        embed.add_field(name="WebSocket", value=f"\`{ws_latency}ms\`")
        embed.add_field(name="API", value=f"\`{api_latency}ms\`")
        await interaction.followup.send(embed=embed)

    # ─── /hello ──────────────────────────────────────────────
    @app_commands.command(name="hello", description="Say hello to TejasBot!")
    async def hello(self, interaction: discord.Interaction):
        """Sends a personalized greeting."""
        user = interaction.user
        embed = discord.Embed(
            title="👋 Hello there!",
            description=(
                f"Hey **{user.display_name}**! I'm **TejasBot** 🤖\\n"
                f"Use \`/help\` to see what I can do!"
            ),
            color=COLOR_INFO
        )
        embed.set_thumbnail(url=user.display_avatar.url)
        await interaction.response.send_message(embed=embed)

    # ─── /help ───────────────────────────────────────────────
    @app_commands.command(name="help", description="Show all available commands")
    async def help(self, interaction: discord.Interaction):
        """Displays a paginated help menu."""
        embed = discord.Embed(
            title="📖 TejasBot Help Menu",
            description="Here are all available commands:",
            color=COLOR_INFO
        )
        embed.add_field(
            name="🛠️ Utility",
            value="\`/ping\` \`/hello\` \`/serverinfo\` \`/userinfo\` \`/avatar\`",
            inline=False
        )
        embed.add_field(
            name="🎮 Fun",
            value="\`/8ball\` \`/coinflip\` \`/dice\` \`/rps\`",
            inline=False
        )
        embed.add_field(
            name="🛡️ Moderation",
            value="\`/clear\` \`/kick\` \`/ban\` \`/warn\`",
            inline=False
        )
        embed.add_field(
            name="⭐ Levels",
            value="\`/rank\` \`/leaderboard\`",
            inline=False
        )
        embed.set_footer(text="TejasBot v1.0 | Built with discord.py")
        await interaction.response.send_message(embed=embed)

    # ─── /serverinfo ─────────────────────────────────────────
    @app_commands.command(name="serverinfo", description="View server information")
    async def serverinfo(self, interaction: discord.Interaction):
        guild = interaction.guild
        embed = discord.Embed(
            title=f"🌐 {guild.name}",
            color=COLOR_INFO
        )
        embed.add_field(name="👥 Members", value=guild.member_count)
        embed.add_field(name="📁 Channels", value=len(guild.channels))
        embed.add_field(name="🎭 Roles", value=len(guild.roles))
        embed.add_field(name="👑 Owner", value=guild.owner.mention)
        embed.add_field(name="📅 Created", value=guild.created_at.strftime("%b %d, %Y"))
        if guild.icon:
            embed.set_thumbnail(url=guild.icon.url)
        await interaction.response.send_message(embed=embed)

async def setup(bot: commands.Bot):
    await bot.add_cog(Utility(bot))`,
  },

  "commands/fun.py": {
    filename: "commands/fun.py",
    language: "python",
    code: `# ============================================================
# commands/fun.py - Fun & entertainment commands
# Commands: /8ball, /coinflip, /dice, /rps
# ============================================================

import discord
from discord import app_commands
from discord.ext import commands
import random

# Magic 8-ball responses
EIGHT_BALL_RESPONSES = [
    # Positive ✅
    "It is certain.", "It is decidedly so.", "Without a doubt.",
    "Yes, definitely!", "You may rely on it.", "As I see it, yes.",
    # Neutral 🤔
    "Reply hazy, try again.", "Ask again later.", "Cannot predict now.",
    "Concentrate and ask again.", "Better not tell you now.",
    # Negative ❌
    "Don't count on it.", "My reply is no.", "My sources say no.",
    "Outlook not so good.", "Very doubtful.",
]

RPS_EMOJIS = {"rock": "🪨", "paper": "📄", "scissors": "✂️"}
RPS_WINS = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

class Fun(commands.Cog):
    """Fun and entertainment commands."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ─── /8ball ──────────────────────────────────────────────
    @app_commands.command(name="8ball", description="Ask the magic 8-ball a question")
    @app_commands.describe(question="Your yes/no question")
    async def eightball(self, interaction: discord.Interaction, question: str):
        response = random.choice(EIGHT_BALL_RESPONSES)
        embed = discord.Embed(title="🎱 Magic 8-Ball", color=0x9B59B6)
        embed.add_field(name="❓ Question", value=question, inline=False)
        embed.add_field(name="🔮 Answer", value=f"**{response}**", inline=False)
        await interaction.response.send_message(embed=embed)

    # ─── /coinflip ───────────────────────────────────────────
    @app_commands.command(name="coinflip", description="Flip a coin — heads or tails?")
    async def coinflip(self, interaction: discord.Interaction):
        result = random.choice(["Heads", "Tails"])
        emoji = "👑" if result == "Heads" else "🔤"
        embed = discord.Embed(
            title=f"🪙 Coin Flip — {emoji} {result}!",
            color=0xF1C40F
        )
        await interaction.response.send_message(embed=embed)

    # ─── /dice ───────────────────────────────────────────────
    @app_commands.command(name="dice", description="Roll a dice!")
    @app_commands.describe(sides="Number of sides (default: 6)")
    async def dice(self, interaction: discord.Interaction, sides: int = 6):
        if sides < 2:
            await interaction.response.send_message(
                "❌ Dice must have at least 2 sides!", ephemeral=True
            )
            return
        result = random.randint(1, sides)
        embed = discord.Embed(
            title="🎲 Dice Roll!",
            description=f"You rolled a **d{sides}** and got: **{result}**",
            color=0xE74C3C
        )
        await interaction.response.send_message(embed=embed)

    # ─── /rps ────────────────────────────────────────────────
    @app_commands.command(name="rps", description="Play Rock, Paper, Scissors!")
    @app_commands.describe(choice="Your choice: rock, paper, or scissors")
    @app_commands.choices(choice=[
        app_commands.Choice(name="Rock 🪨", value="rock"),
        app_commands.Choice(name="Paper 📄", value="paper"),
        app_commands.Choice(name="Scissors ✂️", value="scissors"),
    ])
    async def rps(self, interaction: discord.Interaction, choice: str):
        bot_choice = random.choice(["rock", "paper", "scissors"])
        user_emoji = RPS_EMOJIS[choice]
        bot_emoji = RPS_EMOJIS[bot_choice]

        if choice == bot_choice:
            result = "🤝 It's a tie!"
            color = 0xF1C40F
        elif RPS_WINS[choice] == bot_choice:
            result = "🎉 You win!"
            color = 0x57F287
        else:
            result = "😔 Bot wins!"
            color = 0xED4245

        embed = discord.Embed(title="🎮 Rock Paper Scissors", color=color)
        embed.add_field(name="You", value=f"{user_emoji} {choice.title()}")
        embed.add_field(name="Bot", value=f"{bot_emoji} {bot_choice.title()}")
        embed.add_field(name="Result", value=result, inline=False)
        await interaction.response.send_message(embed=embed)

async def setup(bot: commands.Bot):
    await bot.add_cog(Fun(bot))`,
  },

  "commands/moderation.py": {
    filename: "commands/moderation.py",
    language: "python",
    code: `# ============================================================
# commands/moderation.py - Server moderation commands
# Commands: /clear, /kick, /ban, /warn
# Requires: Manage Messages, Kick Members, Ban Members permissions
# ============================================================

import discord
from discord import app_commands
from discord.ext import commands
from database.database import add_warning, get_warnings
from config import COLOR_SUCCESS, COLOR_ERROR, MAX_CLEAR_AMOUNT

# Permission check decorator
def is_moderator():
    """Check if user has Manage Guild permission."""
    async def predicate(interaction: discord.Interaction) -> bool:
        return interaction.user.guild_permissions.manage_guild
    return app_commands.check(predicate)

class Moderation(commands.Cog):
    """Server moderation commands. Requires moderator permissions."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    # ─── /clear ──────────────────────────────────────────────
    @app_commands.command(name="clear", description="Delete multiple messages at once")
    @app_commands.describe(amount=f"Number of messages to delete (max {MAX_CLEAR_AMOUNT})")
    @app_commands.checks.has_permissions(manage_messages=True)
    async def clear(self, interaction: discord.Interaction, amount: int):
        if amount < 1 or amount > MAX_CLEAR_AMOUNT:
            await interaction.response.send_message(
                f"❌ Amount must be 1–{MAX_CLEAR_AMOUNT}.", ephemeral=True
            )
            return
        await interaction.response.defer(ephemeral=True)
        deleted = await interaction.channel.purge(limit=amount)
        await interaction.followup.send(
            f"🗑️ Cleared **{len(deleted)}** messages!", ephemeral=True
        )

    # ─── /kick ───────────────────────────────────────────────
    @app_commands.command(name="kick", description="Kick a member from the server")
    @app_commands.describe(member="Member to kick", reason="Reason for kick")
    @app_commands.checks.has_permissions(kick_members=True)
    async def kick(self, interaction: discord.Interaction,
                   member: discord.Member, reason: str = "No reason provided"):
        if member.top_role >= interaction.user.top_role:
            await interaction.response.send_message(
                "❌ You can't kick someone with equal or higher role!", ephemeral=True
            )
            return
        try:
            await member.kick(reason=reason)
            embed = discord.Embed(
                title="⚡ Member Kicked",
                description=f"**{member}** has been kicked.",
                color=COLOR_ERROR
            )
            embed.add_field(name="Reason", value=reason)
            embed.add_field(name="Moderator", value=interaction.user.mention)
            await interaction.response.send_message(embed=embed)
        except discord.Forbidden:
            await interaction.response.send_message(
                "❌ I don't have permission to kick that user.", ephemeral=True
            )

    # ─── /ban ────────────────────────────────────────────────
    @app_commands.command(name="ban", description="Permanently ban a user from the server")
    @app_commands.describe(member="Member to ban", reason="Reason for ban")
    @app_commands.checks.has_permissions(ban_members=True)
    async def ban(self, interaction: discord.Interaction,
                  member: discord.Member, reason: str = "No reason provided"):
        if member.top_role >= interaction.user.top_role:
            await interaction.response.send_message(
                "❌ You can't ban someone with equal or higher role!", ephemeral=True
            )
            return
        try:
            await member.ban(reason=reason, delete_message_days=0)
            embed = discord.Embed(
                title="🔨 Member Banned",
                description=f"**{member}** has been permanently banned.",
                color=COLOR_ERROR
            )
            embed.add_field(name="Reason", value=reason)
            embed.add_field(name="Moderator", value=interaction.user.mention)
            await interaction.response.send_message(embed=embed)
        except discord.Forbidden:
            await interaction.response.send_message(
                "❌ I don't have permission to ban that user.", ephemeral=True
            )

    # ─── /warn ───────────────────────────────────────────────
    @app_commands.command(name="warn", description="Issue a warning to a member")
    @app_commands.describe(member="Member to warn", reason="Reason for warning")
    @app_commands.checks.has_permissions(manage_messages=True)
    async def warn(self, interaction: discord.Interaction,
                   member: discord.Member, reason: str = "No reason provided"):
        guild_id = str(interaction.guild.id)
        user_id = str(member.id)

        # Add warning to SQLite database
        warn_count = add_warning(guild_id, user_id, reason, str(interaction.user.id))

        embed = discord.Embed(
            title="⚠️ Warning Issued",
            description=f"**{member.mention}** has been warned.",
            color=0xFEE75C
        )
        embed.add_field(name="Reason", value=reason)
        embed.add_field(name="Total Warnings", value=f"{warn_count}/3")
        embed.add_field(name="Moderator", value=interaction.user.mention)
        await interaction.response.send_message(embed=embed)

        # Auto-kick after max warnings
        if warn_count >= 3:
            try:
                await member.kick(reason=f"Auto-kick: Reached {warn_count} warnings")
                await interaction.channel.send(
                    f"⚡ **{member}** was auto-kicked for reaching {warn_count} warnings!"
                )
            except discord.Forbidden:
                pass

async def setup(bot: commands.Bot):
    await bot.add_cog(Moderation(bot))`,
  },

  "commands/levels.py": {
    filename: "commands/levels.py",
    language: "python",
    code: `# ============================================================
# commands/levels.py - XP and leveling system
# Earns XP per message, levels up automatically
# Commands: /rank, /leaderboard
# ============================================================

import discord
from discord import app_commands
from discord.ext import commands
import random
import time
from database.database import get_user_xp, add_xp, get_leaderboard
from config import XP_PER_MESSAGE_MIN, XP_PER_MESSAGE_MAX, XP_COOLDOWN_SECONDS, xp_for_level

class Levels(commands.Cog):
    """XP and leveling system with SQLite persistence."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot
        # Track cooldowns: {user_id: last_xp_time}
        self._xp_cooldowns: dict[str, float] = {}

    # ─── Listen for messages to award XP ─────────────────────
    @commands.Cog.listener()
    async def on_message(self, message: discord.Message):
        """Award XP to users who send messages (with cooldown)."""
        # Ignore bots and DMs
        if message.author.bot or not message.guild:
            return

        user_id = str(message.author.id)
        guild_id = str(message.guild.id)
        now = time.time()

        # Check cooldown
        last = self._xp_cooldowns.get(user_id, 0)
        if now - last < XP_COOLDOWN_SECONDS:
            return

        self._xp_cooldowns[user_id] = now
        xp_earned = random.randint(XP_PER_MESSAGE_MIN, XP_PER_MESSAGE_MAX)

        # Get current XP/level before update
        old_data = get_user_xp(guild_id, user_id)
        old_level = old_data["level"] if old_data else 0

        # Add XP to database
        new_data = add_xp(guild_id, user_id, xp_earned)

        # Check for level up
        if new_data["level"] > old_level:
            await message.channel.send(
                f"🎉 **Level Up!** Congrats {message.author.mention}! "
                f"You reached **Level {new_data['level']}**! ⭐"
            )

    # ─── /rank ───────────────────────────────────────────────
    @app_commands.command(name="rank", description="Check your XP rank")
    @app_commands.describe(member="Member to check (default: yourself)")
    async def rank(self, interaction: discord.Interaction,
                   member: discord.Member = None):
        target = member or interaction.user
        guild_id = str(interaction.guild.id)
        user_id = str(target.id)

        data = get_user_xp(guild_id, user_id)
        if not data:
            await interaction.response.send_message(
                f"**{target.display_name}** hasn't earned any XP yet!", ephemeral=True
            )
            return

        level = data["level"]
        xp = data["xp"]
        xp_needed = xp_for_level(level + 1)
        progress = int((xp / xp_needed) * 20)  # 20-char progress bar

        bar = "█" * progress + "░" * (20 - progress)

        embed = discord.Embed(title=f"⭐ {target.display_name}'s Rank", color=0xF1C40F)
        embed.set_thumbnail(url=target.display_avatar.url)
        embed.add_field(name="Level", value=f"**{level}**")
        embed.add_field(name="XP", value=f"**{xp:,}** / {xp_needed:,}")
        embed.add_field(name="Progress", value=f"\`{bar}\`", inline=False)
        await interaction.response.send_message(embed=embed)

    # ─── /leaderboard ────────────────────────────────────────
    @app_commands.command(name="leaderboard", description="Top 10 XP earners")
    async def leaderboard(self, interaction: discord.Interaction):
        guild_id = str(interaction.guild.id)
        top = get_leaderboard(guild_id, limit=10)

        embed = discord.Embed(title="🏆 XP Leaderboard", color=0xF1C40F)
        medals = ["🥇", "🥈", "🥉"] + ["🏅"] * 7

        if not top:
            embed.description = "No one has earned XP yet! Start chatting!"
        else:
            lines = []
            for i, row in enumerate(top):
                member = interaction.guild.get_member(int(row["user_id"]))
                name = member.display_name if member else f"User#{row['user_id']}"
                lines.append(
                    f"{medals[i]} **{name}** — Level {row['level']} | {row['xp']:,} XP"
                )
            embed.description = "\\n".join(lines)

        await interaction.response.send_message(embed=embed)

async def setup(bot: commands.Bot):
    await bot.add_cog(Levels(bot))`,
  },

  "database/database.py": {
    filename: "database/database.py",
    language: "python",
    code: `# ============================================================
# database/database.py - SQLite database handler
# Handles: XP/levels, warnings, logging
# ============================================================

import sqlite3
import os
from config import xp_for_level

# Database file path
DB_PATH = "data/bot.db"

def get_connection():
    """Create and return a database connection."""
    os.makedirs("data", exist_ok=True)  # Create data/ folder if needed
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Return rows as dicts
    return conn

def initialize_database():
    """Create all tables if they don't exist."""
    conn = get_connection()
    cursor = conn.cursor()

    # XP and levels table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS levels (
            guild_id TEXT NOT NULL,
            user_id  TEXT NOT NULL,
            xp       INTEGER DEFAULT 0,
            level    INTEGER DEFAULT 0,
            PRIMARY KEY (guild_id, user_id)
        )
    """)

    # Warnings table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS warnings (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            guild_id     TEXT NOT NULL,
            user_id      TEXT NOT NULL,
            reason       TEXT NOT NULL,
            moderator_id TEXT NOT NULL,
            timestamp    DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()
    print("✅ Database initialized successfully!")

# ─── XP Functions ────────────────────────────────────────────

def get_user_xp(guild_id: str, user_id: str) -> dict | None:
    """Get XP data for a user. Returns None if not found."""
    conn = get_connection()
    row = conn.execute(
        "SELECT * FROM levels WHERE guild_id=? AND user_id=?",
        (guild_id, user_id)
    ).fetchone()
    conn.close()
    return dict(row) if row else None

def add_xp(guild_id: str, user_id: str, amount: int) -> dict:
    """Add XP to a user, recalculate level, and return updated data."""
    conn = get_connection()
    cursor = conn.cursor()

    # Upsert: insert or ignore, then update
    cursor.execute(
        "INSERT OR IGNORE INTO levels (guild_id, user_id) VALUES (?, ?)",
        (guild_id, user_id)
    )
    cursor.execute(
        "UPDATE levels SET xp = xp + ? WHERE guild_id=? AND user_id=?",
        (amount, guild_id, user_id)
    )

    # Recalculate level
    row = cursor.execute(
        "SELECT xp FROM levels WHERE guild_id=? AND user_id=?",
        (guild_id, user_id)
    ).fetchone()
    xp = row["xp"]

    # Find the correct level for this XP amount
    level = 0
    while xp >= xp_for_level(level + 1):
        level += 1

    cursor.execute(
        "UPDATE levels SET level=? WHERE guild_id=? AND user_id=?",
        (level, guild_id, user_id)
    )
    conn.commit()
    conn.close()
    return {"xp": xp, "level": level}

def get_leaderboard(guild_id: str, limit: int = 10) -> list[dict]:
    """Get top users by XP for a guild."""
    conn = get_connection()
    rows = conn.execute(
        "SELECT user_id, xp, level FROM levels WHERE guild_id=? ORDER BY xp DESC LIMIT ?",
        (guild_id, limit)
    ).fetchall()
    conn.close()
    return [dict(row) for row in rows]

# ─── Warning Functions ───────────────────────────────────────

def add_warning(guild_id: str, user_id: str, reason: str, moderator_id: str) -> int:
    """Add a warning and return the total warning count."""
    conn = get_connection()
    conn.execute(
        "INSERT INTO warnings (guild_id, user_id, reason, moderator_id) VALUES (?,?,?,?)",
        (guild_id, user_id, reason, moderator_id)
    )
    count = conn.execute(
        "SELECT COUNT(*) FROM warnings WHERE guild_id=? AND user_id=?",
        (guild_id, user_id)
    ).fetchone()[0]
    conn.commit()
    conn.close()
    return count

def get_warnings(guild_id: str, user_id: str) -> list[dict]:
    """Get all warnings for a user in a guild."""
    conn = get_connection()
    rows = conn.execute(
        "SELECT * FROM warnings WHERE guild_id=? AND user_id=? ORDER BY timestamp DESC",
        (guild_id, user_id)
    ).fetchall()
    conn.close()
    return [dict(row) for row in rows]

# Initialize tables on import
initialize_database()`,
  },

  "events/welcome.py": {
    filename: "events/welcome.py",
    language: "python",
    code: `# ============================================================
# events/welcome.py - Member join/leave welcome system
# Sends embed messages when members join or leave
# ============================================================

import discord
from discord.ext import commands
from config import WELCOME_CHANNEL_ID, COLOR_SUCCESS, COLOR_ERROR

class Welcome(commands.Cog):
    """Handles member join and leave events."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_member_join(self, member: discord.Member):
        """Send welcome message when a new member joins."""
        # Find the welcome channel
        channel = self.bot.get_channel(WELCOME_CHANNEL_ID)
        if not channel:
            # Fallback: use the system channel
            channel = member.guild.system_channel
        if not channel:
            return  # No channel found, skip

        member_count = member.guild.member_count

        embed = discord.Embed(
            title=f"🎉 Welcome to {member.guild.name}!",
            description=(
                f"Hey {member.mention}, glad you're here!\\n\\n"
                f"📌 Read our rules in <#RULES_CHANNEL_ID>\\n"
                f"💬 Introduce yourself in <#INTROS_CHANNEL_ID>\\n"
                f"🎮 Have fun and enjoy your stay!"
            ),
            color=COLOR_SUCCESS
        )
        embed.set_thumbnail(url=member.display_avatar.url)
        embed.set_footer(text=f"Member #{member_count:,} • {member.guild.name}")
        embed.timestamp = discord.utils.utcnow()

        await channel.send(embed=embed)

        # Send DM to new member
        try:
            dm_embed = discord.Embed(
                title=f"👋 Welcome to {member.guild.name}!",
                description=(
                    f"Hi **{member.display_name}**! Thanks for joining.\\n"
                    f"Use \`/help\` to see available bot commands!"
                ),
                color=COLOR_SUCCESS
            )
            await member.send(embed=dm_embed)
        except discord.Forbidden:
            pass  # User has DMs disabled

    @commands.Cog.listener()
    async def on_member_remove(self, member: discord.Member):
        """Send farewell message when a member leaves."""
        channel = self.bot.get_channel(WELCOME_CHANNEL_ID)
        if not channel:
            channel = member.guild.system_channel
        if not channel:
            return

        embed = discord.Embed(
            title="👋 Member Left",
            description=f"**{member.mention}** has left the server. Goodbye!",
            color=COLOR_ERROR
        )
        embed.set_thumbnail(url=member.display_avatar.url)
        embed.timestamp = discord.utils.utcnow()
        await channel.send(embed=embed)

async def setup(bot: commands.Bot):
    await bot.add_cog(Welcome(bot))`,
  },

  "events/logging.py": {
    filename: "events/logging.py",
    language: "python",
    code: `# ============================================================
# events/logging.py - Server action logging system
# Logs: deleted messages, member joins/leaves, bans, kicks
# ============================================================

import discord
from discord.ext import commands
from config import LOG_CHANNEL_ID, COLOR_WARNING, COLOR_ERROR, COLOR_LOG
import datetime

class Logging(commands.Cog):
    """Logs server events to a designated log channel."""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    async def get_log_channel(self, guild: discord.Guild):
        """Get the configured log channel for this guild."""
        channel = guild.get_channel(LOG_CHANNEL_ID)
        return channel  # Returns None if not configured

    # ─── Message Deleted ─────────────────────────────────────
    @commands.Cog.listener()
    async def on_message_delete(self, message: discord.Message):
        """Log deleted messages to the log channel."""
        if message.author.bot or not message.guild:
            return

        log_channel = await self.get_log_channel(message.guild)
        if not log_channel:
            return

        embed = discord.Embed(
            title="🗑️ Message Deleted",
            color=COLOR_WARNING
        )
        embed.add_field(name="Author", value=message.author.mention)
        embed.add_field(name="Channel", value=message.channel.mention)
        embed.add_field(
            name="Content",
            value=message.content[:1000] if message.content else "*(no text)*",
            inline=False
        )
        embed.timestamp = discord.utils.utcnow()
        await log_channel.send(embed=embed)

    # ─── Member Join Log ─────────────────────────────────────
    @commands.Cog.listener()
    async def on_member_join(self, member: discord.Member):
        """Log member joins to the log channel."""
        log_channel = await self.get_log_channel(member.guild)
        if not log_channel:
            return

        embed = discord.Embed(
            title="📥 Member Joined",
            description=f"{member.mention} **{member}**",
            color=0x57F287
        )
        embed.add_field(name="Account Created",
            value=member.created_at.strftime("%b %d, %Y"))
        embed.set_thumbnail(url=member.display_avatar.url)
        embed.timestamp = discord.utils.utcnow()
        await log_channel.send(embed=embed)

    # ─── Member Leave Log ────────────────────────────────────
    @commands.Cog.listener()
    async def on_member_remove(self, member: discord.Member):
        """Log member departures to the log channel."""
        log_channel = await self.get_log_channel(member.guild)
        if not log_channel:
            return

        embed = discord.Embed(
            title="📤 Member Left",
            description=f"**{member}** left the server.",
            color=COLOR_LOG
        )
        embed.add_field(name="Roles",
            value=", ".join([r.name for r in member.roles[1:]]) or "None")
        embed.set_thumbnail(url=member.display_avatar.url)
        embed.timestamp = discord.utils.utcnow()
        await log_channel.send(embed=embed)

    # ─── Ban Log ─────────────────────────────────────────────
    @commands.Cog.listener()
    async def on_member_ban(self, guild: discord.Guild, user: discord.User):
        """Log bans using audit log data."""
        log_channel = await self.get_log_channel(guild)
        if not log_channel:
            return

        # Look up audit log for ban reason
        reason = "No reason provided"
        moderator = "Unknown"
        async for entry in guild.audit_logs(action=discord.AuditLogAction.ban, limit=1):
            reason = str(entry.reason) if entry.reason else reason
            moderator = str(entry.user)

        embed = discord.Embed(
            title="🔨 Member Banned",
            description=f"**{user}** was banned.",
            color=COLOR_ERROR
        )
        embed.add_field(name="Reason", value=reason)
        embed.add_field(name="Moderator", value=moderator)
        embed.set_thumbnail(url=user.display_avatar.url)
        embed.timestamp = discord.utils.utcnow()
        await log_channel.send(embed=embed)

async def setup(bot: commands.Bot):
    await bot.add_cog(Logging(bot))`,
  },

  ".env.example": {
    filename: ".env.example",
    language: "bash",
    code: `# ============================================================
# .env.example - Copy this to .env and fill in your values
# NEVER commit your actual .env file to GitHub!
# ============================================================

# Your Discord Bot Token (from discord.com/developers/applications)
DISCORD_TOKEN=your_discord_bot_token_here

# Channel IDs (right-click channel → Copy ID in Discord)
WELCOME_CHANNEL_ID=123456789012345678
LOG_CHANNEL_ID=987654321098765432`,
  },

  "requirements.txt": {
    filename: "requirements.txt",
    language: "text",
    code: `# TejasBot Python Dependencies
# Install with: pip install -r requirements.txt

discord.py==2.3.2        # Discord API wrapper with slash command support
python-dotenv==1.0.0     # Load environment variables from .env file`,
  },
};

export const GITHUB_STEPS = [
  { step: 1, cmd: "git init", desc: "Initialize a new Git repository in your project folder" },
  { step: 2, cmd: "git add .", desc: "Stage all files (the .gitignore will exclude .env and bot.db)" },
  { step: 3, cmd: 'git commit -m "🤖 Initial commit: TejasBot v1.0"', desc: "Create your first commit with all files" },
  { step: 4, cmd: "gh repo create TejasBot --public --source=. --push", desc: "Create GitHub repo and push (requires GitHub CLI)" },
];
